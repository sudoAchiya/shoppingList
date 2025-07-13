import { IPart } from '@sikur/types';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { PartQuestion } from '@/part-question/part-question.entity';
import { Section } from '@/section/section.entity';

@Entity()
export class Part implements IPart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  index: number;

  @Column()
  sectionId: number;

  @Column()
  header: string;

  @Column()
  subHeader: string;

  @ManyToOne(() => Section, section => section.parts)
  @JoinColumn({ name: 'section_id' })
  section: Section;

  @OneToMany(() => PartQuestion, partQuestion => partQuestion.part)
  partQuestions?: PartQuestion[];
}
