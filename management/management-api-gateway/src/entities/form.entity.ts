import { IForm } from '@sikur/types';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { FormType } from '@/entities/form-type.entity';
import { Section } from '@/entities/section.entity';

@Entity({ name: 'forms' })
export class Form implements IForm {
  constructor(partial: Partial<Form>) {
    Object.assign(this, partial);
  }

  @PrimaryColumn()
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
  formType?: FormType;

  @OneToMany(() => Section, section => section.form)
  sections?: Section[];
}
