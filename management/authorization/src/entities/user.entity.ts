import { IUser } from '@sikur/types';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserOrganization } from '@/entities/user-organization.entity';
import { UserToRole } from '@/entities/user-to-role.entity';

@Entity('users')
export class User implements IUser {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  personalNumber: string;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;

  @OneToMany(() => UserToRole, userToRole => userToRole.user)
  userToRoles?: UserToRole[];

  @OneToMany(() => UserOrganization, userOrganization => userOrganization.user)
  userOrganizations?: UserOrganization[];
}
