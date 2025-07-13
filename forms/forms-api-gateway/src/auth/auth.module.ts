import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, Reflector } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { SSOModule, SSOProperties, SSOProtocol } from '@ultra/sso';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';
import { AuthController } from '@/auth/auth.controller';
import { AuthService } from '@/auth/auth.service';
import { RedirectUnauthorizedFilter } from '@/auth/filters/redirect-unauthorized.filter';
import { AccessTokenGuard } from '@/common/guards/accessToken.guard';
import createSamlSSOConfig from '@/config/sso';

@Module({
  imports: [
    JwtModule.register({}),
    SSOModule.registerAsync({
      import: [ConfigModule, AuthModule],
      useFactory: (
        configService: ConfigService,
        authService: AuthService,
      ): SSOProperties => ({
        protocol: SSOProtocol.SAML,
        options: createSamlSSOConfig(configService),
        callbackFunc: authService.ssoCallback.bind(authService),
      }),
      inject: [ConfigService, AuthService],
    }),
  ],
  providers: [
    AuthService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
    {
      provide: APP_FILTER,
      useClass: RedirectUnauthorizedFilter,
    },
    {
      provide: APP_GUARD,
      useFactory: (reflector: Reflector) => new AccessTokenGuard(reflector),
      inject: [Reflector],
    },
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
