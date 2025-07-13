import type { IUserToRole } from '@/authorization/interfaces/user-to-role.interface';

export interface IRole {
  id: number;
  name: string;
  level: number;
  updatedAt: Date;
  createdAt: Date;
  userToRoles?: IUserToRole[];
}
