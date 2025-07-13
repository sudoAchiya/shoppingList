import { Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { FULL_SSO_ROUTES, Public } from '@ultra/sso';
import type { Response, Request } from 'express';
import { AuthService } from '@/auth/auth.service';
import { CurrentConnectedUser } from '@/auth/models/connected-user.model';
import { CurrentUser } from '@/common/decorators/current-user.decorator';
import { RefreshTokenRoute } from '@/common/decorators/refresh-token-route.decorator';
import {
  AUTH_DEFAULT_RETURN_TO,
  AUTH_RETURN_TO_COOKIE_NAME,
} from '@/utils/constants/auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Get('login')
  login(@Res() res: Response, @Query('returnTo') returnTo?: string): void {
    res.cookie(AUTH_RETURN_TO_COOKIE_NAME, returnTo ?? AUTH_DEFAULT_RETURN_TO);

    res.redirect(FULL_SSO_ROUTES.LOGIN);
  }

  @Get('authenticated-user')
  @ApiResponse({ type: CurrentConnectedUser })
  authenticatedUser(
    @CurrentUser() user: CurrentConnectedUser,
  ): CurrentConnectedUser {
    return user;
  }

  @Post('refresh')
  @RefreshTokenRoute()
  async refresh(@Req() req: Request, @Res() res: Response): Promise<void> {
    await this.authService.refreshTokens(
      req.cookies.refreshToken as string,
      res,
    );

    res.send({ success: true });
  }
}
