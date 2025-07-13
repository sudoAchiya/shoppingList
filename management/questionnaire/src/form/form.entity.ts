import { IForm } from '@sikur/types';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { FormType } from '@/form-type/form-type.entity';
import { Section } from '@/section/section.entity';

@Entity()
export class Form implements IForm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  formTypeId: number;

  @Column()
  year: number;

  @Column()
  title: string;

  @Column()
  organizationId: string;

  @Column()
  openingText: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => FormType, formType => formType.forms)
  @JoinColumn({ name: 'form_type_id' })
  formType: FormType;

  @OneToMany(() => Section, section => section.form)
  sections: Section[];
}
