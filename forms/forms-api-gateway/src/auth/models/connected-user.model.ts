import { ApiProperty } from '@nestjs/swagger';
import { TokenUserRole } from '@sikur/enums';

export class CurrentConnectedUser {
  @ApiProperty()
  personalIdentifier: string;

  @ApiProperty()
  username: string;

  @ApiProperty({ enum: TokenUserRole })
  role: TokenUserRole;
}
