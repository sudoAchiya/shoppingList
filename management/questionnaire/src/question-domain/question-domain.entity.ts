import { IQuestionDomain } from '@sikur/types';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { QuestionToQuestionDomain } from '@/question-to-question-domain/question-to-question-domain.entity';

@Entity()
export class QuestionDomain implements IQuestionDomain {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @OneToMany(
    () => QuestionToQuestionDomain,
    questionToQuestionDomain => questionToQuestionDomain.questionDomain,
  )
  questionLinks: QuestionToQuestionDomain[];
}
