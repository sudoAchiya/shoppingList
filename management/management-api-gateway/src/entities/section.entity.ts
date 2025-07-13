import { ISection } from '@sikur/types';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Form } from '@/entities/form.entity';
import { Part } from '@/entities/part.entity';

@Entity({ name: 'sections' })
export class Section implements ISection {
  constructor(partial: Partial<Section>) {
    Object.assign(this, partial);
  }

  @PrimaryColumn()
  id: number;

  @Column()
  index: number;

  @Column()
  formId: number;

  @Column()
  header: string;

  @OneToMany(() => Part, part => part.section)
  parts?: Part[];

  @ManyToOne(() => Form, form => form.sections)
  @JoinColumn({ name: 'form_id' })
  form?: Form;
}
