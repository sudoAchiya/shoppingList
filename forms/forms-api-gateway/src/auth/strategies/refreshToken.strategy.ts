import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { UserTokenPayload } from '@sikur/types';
import { Request } from 'express';
import { Strategy } from 'passport-jwt';
import { CurrentConnectedUser } from '@/auth/models/connected-user.model';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: (req: Request) => req.cookies.refreshToken,
      secretOrKey: configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
    });
  }

  validate(payload: UserTokenPayload): CurrentConnectedUser {
    return {
      personalIdentifier: payload.sub,
      username: payload.username,
      role: payload.role,
    };
  }
}
