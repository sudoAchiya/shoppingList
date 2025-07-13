import type { IUser } from '@/authorization/interfaces/user.interface';

export interface IUserOrganization {
  id: number;
  organizationId: string;
  userId: IUser['id'];
  createdAt: Date;
  user?: IUser;
}
