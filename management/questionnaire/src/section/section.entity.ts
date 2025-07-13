import { ISection } from '@sikur/types';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Form } from '@/form/form.entity';
import { Part } from '@/part/part.entity';

@Entity()
export class Section implements ISection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  index: number;

  @Column()
  formId: number;

  @Column()
  header: string;

  @ManyToOne(() => Form, form => form.sections)
  @JoinColumn({ name: 'form_id' })
  form: Form;

  @OneToMany(() => Part, part => part.section)
  parts: Part[];
}
