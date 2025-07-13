import type { IFormQuestionAnswer } from '@/form-data/interfaces';
import type { IForm } from '@/form-structure/interfaces';

export interface IEvaluationFormTemplate {
  formId: IForm['id'];
  personalIdentifier: string;
  workId: number;
  object: IForm;
  createdAt: Date;
  updateAt: Date;
  exportedAt: Date | null;
  lastVisitedSectionIndex: number | null;
  formQuestionAnswers?: IFormQuestionAnswer[];
}
