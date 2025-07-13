import { IPartQuestion } from '@sikur/types';
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Part } from '@/part/part.entity';
import { Question } from '@/question/question.entity';

@Entity()
export class PartQuestion implements IPartQuestion {
  @PrimaryColumn()
  questionId: number;

  @PrimaryColumn()
  partId: number;

  @Column()
  index: number;

  @ManyToOne(() => Question, question => question.partQuestions)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @ManyToOne(() => Part, part => part.partQuestions)
  @JoinColumn({ name: 'part_id' })
  part: Part;
}
