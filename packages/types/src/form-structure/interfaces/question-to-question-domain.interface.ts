import type { IQuestionDomain, IQuestion } from '@/form-structure/interfaces';

export interface IQuestionToQuestionDomain {
  questionId: IQuestion['id'];
  questionDomainId: IQuestionDomain['id'];
  startDate: Date;
  endDate: Date;
  question?: IQuestion;
  questionDomain?: IQuestionDomain;
}
