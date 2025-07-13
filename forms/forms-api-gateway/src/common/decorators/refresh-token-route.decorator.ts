import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from '@/common/guards/refreshToken.guard';

export const IS_REFRESH_TOKEN_ROUTE_KEY = 'isRefreshTokenRoute';

export const RefreshTokenRoute = (): MethodDecorator & ClassDecorator => {
  return applyDecorators(
    SetMetadata(IS_REFRESH_TOKEN_ROUTE_KEY, true),
    UseGuards(RefreshTokenGuard),
  );
};
