import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TokenUserRole } from '@sikur/enums';
import { UserTokenPayload } from '@sikur/types';
import { SSORequest } from '@ultra/sso';
import { CookieOptions, Response } from 'express';
import ms from 'ms';
import { AUTH_RETURN_TO_COOKIE_NAME } from '@/utils/constants/auth';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  private extractUserAttribute(req: SSORequest, attribute: string): string {
    return req.user.attributes[attribute] as string;
  }

  private extractPersonalIdentifier(req: SSORequest): string {
    return this.extractUserAttribute(
      req,
      this.configService.getOrThrow<string>('SSO_MAIL_PROFILE'),
    )
      .split('@')[0]
      .replace(/^[a-zA-Z]/, '');
  }

  async ssoCallback(req: SSORequest, res: Response): Promise<void> {
    const tokens = await this.getTokens({
      sub: this.extractPersonalIdentifier(req),
      username: `${this.extractUserAttribute(
        req,
        this.configService.getOrThrow<string>('SSO_DISPLAY_NAME_PROFILE'),
      )} ${this.extractUserAttribute(
        req,
        this.configService.getOrThrow<string>('SSO_LAST_NAME_PROFILE'),
      )}`,
      role: TokenUserRole.USER,
    });
    this.updateTokens(res, tokens.accessToken, tokens.refreshToken);

    const {
      cookies: { returnTo },
    } = req;
    res.clearCookie(AUTH_RETURN_TO_COOKIE_NAME);

    res.redirect(returnTo ?? '/');
  }

  updateTokens(res: Response, accessToken: string, refreshToken: string): void {
    const cookieConfig: CookieOptions = {
      httpOnly: true,
      secure:
        this.configService.getOrThrow<string>('NODE_ENV') === 'production',
    };

    res.cookie('refreshToken', refreshToken, {
      maxAge: ms(
        this.configService.getOrThrow<string>(
          'REFRESH_TOKEN_EXPIRATION',
        ) as ms.StringValue,
      ),
      ...cookieConfig,
    });
    res.cookie('accessToken', accessToken, {
      maxAge: ms(
        this.configService.getOrThrow<string>(
          'ACCESS_TOKEN_EXPIRATION',
        ) as ms.StringValue,
      ),
      ...cookieConfig,
    });
  }

  async refreshTokens(refreshToken: string, res: Response): Promise<void> {
    const payload = this.jwtService.verify<UserTokenPayload>(refreshToken, {
      secret: this.configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
    });

    const tokens = await this.getTokens({
      sub: payload.sub,
      username: payload.username,
      role: payload.role,
    });
    this.updateTokens(res, tokens.accessToken, tokens.refreshToken);
  }

  async getTokens(payload: UserTokenPayload): Promise<{
    accessToken: string;
    refreshToken: string;
  }> {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: this.configService.getOrThrow<string>('JWT_ACCESS_SECRET'),
        expiresIn: this.configService.getOrThrow<string>(
          'ACCESS_TOKEN_EXPIRATION',
        ),
      }),
      this.jwtService.signAsync(payload, {
        secret: this.configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
        expiresIn: this.configService.getOrThrow<string>(
          'REFRESH_TOKEN_EXPIRATION',
        ),
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
}
