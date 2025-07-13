import { IQuestionDomain } from '@sikur/types';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { QuestionToQuestionDomain } from './question-to-question-domain.entity';

@Entity({ name: 'question_domains' })
export class QuestionDomain implements IQuestionDomain {
  constructor(partial: Partial<QuestionDomain>) {
    Object.assign(this, partial);
  }

  @PrimaryColumn()
  id: number;

  @Column()
  content: string;

  @OneToMany(
    () => QuestionToQuestionDomain,
    questionToQuestionDomain => questionToQuestionDomain.questionDomain,
  )
  questionToQuestionDomains?: QuestionToQuestionDomain[];
}
