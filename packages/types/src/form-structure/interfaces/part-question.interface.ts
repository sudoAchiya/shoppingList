import type { IPart, IQuestion } from '@/form-structure/interfaces';

export interface IPartQuestion {
  index: number;
  questionId: IQuestion['id'];
  partId: IPart['id'];
  question?: IQuestion;
  part?: IPart;
}
