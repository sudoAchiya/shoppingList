import { IQuestionContent } from '@sikur/types';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Question } from '@/question/question.entity';

@Entity()
export class QuestionContent implements IQuestionContent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  questionId: number;

  @Column()
  content: string;

  @Column()
  createdAt: Date;

  @Column()
  version: number;

  @Column()
  maxEntries: number;

  @ManyToOne(() => Question, question => question.contents)
  @JoinColumn({ name: 'question_id' })
  question: Question;
}
