import { IUserOrganization } from '@sikur/types';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '@/entities/user.entity';

@Entity('user_organizations')
export class UserOrganization implements IUserOrganization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  organizationId: string;

  @Column()
  userId: number;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @ManyToOne(() => User, user => user.userOrganizations)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
