import { IUserToRole } from '@sikur/types';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '@/entities/role.entity';
import { User } from '@/entities/user.entity';

@Entity('user_to_roles')
export class UserToRole implements IUserToRole {
  constructor(partial: Partial<UserToRole>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @Column()
  roleId: number;

  @Column()
  userId: number;

  @ManyToOne(() => User, user => user.userToRoles)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Role, role => role.userToRoles)
  @JoinColumn({ name: 'role_id' })
  role: Role;
}
