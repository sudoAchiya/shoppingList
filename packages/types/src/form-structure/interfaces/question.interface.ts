import type {
  IAnswer,
  IQuestionContent,
  IQuestionToQuestionDomain,
  IQuestionType,
} from '@/form-structure/interfaces';

export interface IQuestion {
  id: number;
  questionTypeId: IQuestionType['id'];
  questionType?: IQuestionType;
  answers?: IAnswer[];
  questionToQuestionDomains?: IQuestionToQuestionDomain[];
  questionContents?: IQuestionContent[];
}
