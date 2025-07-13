import { IQuestionToQuestionDomain } from '@sikur/types';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { QuestionDomain } from '@/entities/question-domain.entity';
import { Question } from '@/entities/question.entity';

@Entity({ name: 'question_to_question_domains' })
export class QuestionToQuestionDomain implements IQuestionToQuestionDomain {
  constructor(partial: Partial<QuestionToQuestionDomain>) {
    Object.assign(this, partial);
  }

  @PrimaryColumn()
  questionId: number;

  @PrimaryColumn()
  questionDomainId: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @ManyToOne(
    () => QuestionDomain,
    questionDomain => questionDomain.questionToQuestionDomains,
  )
  @JoinColumn({ name: 'question_domain_id' })
  questionDomain?: QuestionDomain;

  @ManyToOne(() => Question, question => question.questionToQuestionDomains)
  @JoinColumn({ name: 'question_id' })
  question?: Question;
}
