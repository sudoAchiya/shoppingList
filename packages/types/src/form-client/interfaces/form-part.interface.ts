import type { QuestionTypeEnum } from '@sikur/enums';

export interface IFormPart {
  title: string;
  subTitle: string;
  partQuestions?: IFormPartQuestion[];
}

export interface IFormPartQuestion {
  index: number;
  questionId: number;
  partId: number;
  question: IFormPartQuestionDetails;
}

export interface IFormPartQuestionDetails {
  id: number;
  questionType: QuestionTypeEnum;
  questionContent: {
    pickedValue?: number | null;
    selected?: string[];
    scaleOptions?: Array<{ value: number; label: string }>;
    subtitle?: string;
    choices?: Array<{ value: string; label: string; isSelected: boolean }>;
    content?: string;
    maxEntries?: number;
  };
}
