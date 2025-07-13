import type {
  IEvaluationFormTemplate,
  IQuestionAnswerToExport,
} from '@/form-data';

export interface IEvaluationFormToExport {
  formId: IEvaluationFormTemplate['formId'];
  workId: IEvaluationFormTemplate['workId'];
  personalIdentifier: IEvaluationFormTemplate['personalIdentifier'];
  answers: IQuestionAnswerToExport[];
}
