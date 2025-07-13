import type { QuestionTypeEnum } from '@sikur/enums';
import type { IQuestion } from '@/form-structure/interfaces';

export interface IQuestionType {
  id: number;
  type: QuestionTypeEnum;
  description: string;
  questions?: IQuestion[];
}
