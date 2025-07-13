import { IRole } from '@sikur/types';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserToRole } from '@/entities/user-to-role.entity';

@Entity('roles')
export class Role implements IRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  level: number;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @OneToMany(() => UserToRole, userToRole => userToRole.role)
  userToRoles?: UserToRole[];
}
