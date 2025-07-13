import type { IRole } from '@/authorization/interfaces/role.interface';
import type { IUser } from '@/authorization/interfaces/user.interface';

export interface IUserToRole {
  id: number;
  updatedAt: Date;
  createdAt: Date;
  roleId: IRole['id'];
  userId: IUser['id'];
  user: IUser;
  role: IRole;
}
