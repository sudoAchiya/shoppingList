import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const user = req.user;

    const userKeys = {
      personalIdentifier: 'x-user-identification',
      username: 'x-user-name',
    };

    if (
      user !== undefined &&
      user !== null &&
      Object.keys(userKeys).every(key =>
        Object.prototype.hasOwnProperty.call(user, key),
      )
    ) {
      for (const [userKey, headerKey] of Object.entries(userKeys)) {
        req.headers[headerKey] = encodeURIComponent(user[userKey] ?? '');
      }
    }

    return next.handle();
  }
}
