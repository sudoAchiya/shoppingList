import { IFormType } from '@sikur/types';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Form } from '@/entities/form.entity';

@Entity({ name: 'form_types' })
export class FormType implements IFormType {
  constructor(partial: Partial<FormType>) {
    Object.assign(this, partial);
  }

  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Form, form => form.formType)
  forms?: Form[];
}
