import { IAnswer } from '@sikur/types';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Question } from '@/entities/question.entity';

@Entity({ name: 'answers' })
export class Answer implements IAnswer {
  constructor(partial: Partial<Answer>) {
    Object.assign(this, partial);
  }

  @PrimaryColumn()
  id: number;

  @Column()
  questionId: number;

  @Column()
  content: string;

  @ManyToOne(() => Question, question => question.answers)
  @JoinColumn({ name: 'question_id' })
  question?: Question;
}
