import { IFormType } from '@sikur/types';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Form } from '@/form/form.entity';

@Entity()
export class FormType implements IFormType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Form, form => form.formType)
  forms: Form[];
}
