import {
  ExceptionFilter,
  Catch,
  UnauthorizedException,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from '@/auth/auth.service';

@Catch(UnauthorizedException)
export class RedirectUnauthorizedFilter implements ExceptionFilter {
  constructor(private readonly authService: AuthService) {}

  async catch(_: UnauthorizedException, host: ArgumentsHost): Promise<void> {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const {
      cookies: { refreshToken },
    } = request;

    try {
      await this.authService.refreshTokens(refreshToken as string, response);
      response.redirect(request.originalUrl);
    } catch {
      response
        .status(HttpStatus.UNAUTHORIZED)
        .json({ code: HttpStatus.UNAUTHORIZED, message: 'נא להתחבר מחדש' });
    }
  }
}
