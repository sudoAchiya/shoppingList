import type { TokenUserRole } from '@sikur/enums';

export interface UserTokenPayload {
  sub: string; // personal identifier
  username: string;
  role: TokenUserRole;
}
