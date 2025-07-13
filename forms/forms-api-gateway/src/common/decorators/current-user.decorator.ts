import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import type { UserTokenPayload } from '@sikur/types';
import type { Request } from 'express';

/**
 * @CurrentUser() will return the entire user payload (whatever your strategy.validate() returned).
 * @CurrentUser(':property') will return only the property of the user payload.
 */
export const CurrentUser = createParamDecorator(
  (data: keyof UserTokenPayload | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const user = request.user as UserTokenPayload | undefined;
    if (user == null) {
      return null;
    }

    if (data !== undefined) {
      return user[data];
    }

    return user;
  },
);
