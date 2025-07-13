import type { IQuestion } from '@/form-structure/interfaces';

export interface IAnswer {
  id: number;
  questionId: IQuestion['id'];
  content: string;
  question?: IQuestion;
}
