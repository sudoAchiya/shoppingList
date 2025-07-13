import type {
  IFormQuestionAnswer,
  IFormQuestionAnswerValue,
} from '@/form-data';
import type { IQuestion } from '@/form-structure';

export interface IQuestionAnswerToExport {
  id: IFormQuestionAnswer['id'];
  formQuestionId: IQuestion['id'];
  object: IFormQuestionAnswerValue;
}
