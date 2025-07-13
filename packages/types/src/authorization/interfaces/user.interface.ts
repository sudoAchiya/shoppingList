import type { IUserOrganization } from '@/authorization/interfaces/user-organization.interface';
import type { IUserToRole } from '@/authorization/interfaces/user-to-role.interface';

export interface IUser {
  id: number;
  personalNumber: string;
  updatedAt: Date;
  userToRoles?: IUserToRole[];
  userOrganizations?: IUserOrganization[];
}
