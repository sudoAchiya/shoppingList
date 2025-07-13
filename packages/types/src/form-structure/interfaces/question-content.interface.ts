import type { IQuestion } from '@/form-structure/interfaces';

export interface IQuestionContent {
  id: number;
  questionId: IQuestion['id'];
  createdAt: Date;
  version: number;
  maxEntries: number;
  content: string;
  question?: IQuestion;
}
