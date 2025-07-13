import type { IEvaluationFormTemplate } from '@/form-data/interfaces';
import type { IFormQuestionAnswerValue } from '@/form-data/interfaces/form-question-answer-value.interface';
import type { IQuestion } from '@/form-structure/interfaces';

export interface IFormQuestionAnswer {
  id: number;
  formQuestionId: IQuestion['id'];
  object: IFormQuestionAnswerValue;
  formId: IEvaluationFormTemplate['formId'];
  evaluationFormTemplate?: IEvaluationFormTemplate;
}
