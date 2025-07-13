import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from '@ultra/sso';
import { Response } from 'express';
import { Observable } from 'rxjs';
import { IS_REFRESH_TOKEN_ROUTE_KEY } from '@/common/decorators/refresh-token-route.decorator';

@Injectable()
export class AccessTokenGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  isPublic(context: ExecutionContext): boolean {
    return this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
  }

  isRefreshTokenRoute(context: ExecutionContext): boolean {
    return this.reflector.getAllAndOverride<boolean>(
      IS_REFRESH_TOKEN_ROUTE_KEY,
      [context.getHandler(), context.getClass()],
    );
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    if (this.isPublic(context) || this.isRefreshTokenRoute(context))
      return true;

    return super.canActivate(context);
  }

  handleRequest(err, user, _info, context: ExecutionContext): any {
    const res = context.switchToHttp().getResponse<Response>();
    if ((err !== null && err !== undefined) || user === false) {
      res.clearCookie('accessToken');
      throw err instanceof Error ? err : new UnauthorizedException();
    }

    return user;
  }
}
