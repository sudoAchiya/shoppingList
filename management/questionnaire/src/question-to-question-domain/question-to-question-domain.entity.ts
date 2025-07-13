import { IQuestionToQuestionDomain } from '@sikur/types';
import { Entity, PrimaryColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { Question } from '@/question/question.entity';
import { QuestionDomain } from '@/question-domain/question-domain.entity';

@Entity()
export class QuestionToQuestionDomain implements IQuestionToQuestionDomain {
  @PrimaryColumn()
  questionId: number;

  @PrimaryColumn()
  questionDomainId: number;

  @Column({ type: 'timestamp with time zone' })
  startDate: Date;

  @Column({ type: 'timestamp with time zone' })
  endDate: Date;

  @ManyToOne(() => Question, question => question.domains)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @ManyToOne(
    () => QuestionDomain,
    questionDomain => questionDomain.questionLinks,
  )
  @JoinColumn({ name: 'question_domain_id' })
  questionDomain: QuestionDomain;
}
