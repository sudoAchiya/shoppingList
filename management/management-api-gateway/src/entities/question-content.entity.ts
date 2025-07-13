import { IQuestionContent } from '@sikur/types';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Question } from '@/entities/question.entity';

@Entity({ name: 'parts' })
export class QuestionContent implements IQuestionContent {
  constructor(partial: Partial<QuestionContent>) {
    Object.assign(this, partial);
  }

  @PrimaryColumn()
  id: number;

  @Column()
  questionId: number;

  @Column()
  createdAt: Date;

  @Column()
  version: number;

  @Column()
  maxEntries: number;

  @Column()
  content: string;

  @ManyToOne(() => Question, question => question.questionContents)
  @JoinColumn({ name: 'question_id' })
  question?: Question;
}
