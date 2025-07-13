import { IPart } from '@sikur/types';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { PartQuestion } from '@/entities/part-question.entity';
import { Section } from '@/entities/section.entity';

@Entity({ name: 'parts' })
export class Part implements IPart {
  constructor(partial: Partial<Part>) {
    Object.assign(this, partial);
  }

  @PrimaryColumn()
  id: number;

  @Column()
  index: number;

  @Column()
  sectionId: number;

  @Column()
  header: string;

  @Column()
  subHeader: string;

  @OneToMany(() => PartQuestion, partQuestion => partQuestion.part)
  partQuestions?: PartQuestion[];

  @ManyToOne(() => Section, section => section.parts)
  @JoinColumn({ name: 'section_id' })
  section?: Section;
}
