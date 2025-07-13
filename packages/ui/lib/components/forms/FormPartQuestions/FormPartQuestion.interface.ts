import { QuestionTypeEnum } from '@sikur/enums';
import type { IFormPart } from '@sikur/types';

export type KeepImproveValueType = {
  keep: string | null;
  improve: string | null;
};

export type AnswerValueMap = {
  [QuestionTypeEnum.Scale]: number | null;
  [QuestionTypeEnum.MultiChoice]: string[] | null;
  [QuestionTypeEnum.FreeText]: string;
  [QuestionTypeEnum.KeepImprove]: KeepImproveValueType | null;
};

export type AnswerEntry = {
  [T in keyof AnswerValueMap]: {
    type: T;
    value: AnswerValueMap[T];
  };
}[keyof AnswerValueMap];

export interface AnswersState {
  [formQuestionId: number]: AnswerEntry;
}

export interface QuestionRendererProps {
  index?: number;
  formPart: IFormPart;
  answers?: AnswersState;
  onChangeAnswer: <T extends keyof AnswerValueMap>(
    questionId: number,
    questionType: T,
    value: AnswerValueMap[T],
  ) => void;
}
