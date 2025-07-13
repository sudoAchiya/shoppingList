import type { IQuestionToQuestionDomain } from '@/form-structure/interfaces';

export interface IQuestionDomain {
  id: number;
  content: string;
  questionToQuestionDomains?: IQuestionToQuestionDomain[];
}
