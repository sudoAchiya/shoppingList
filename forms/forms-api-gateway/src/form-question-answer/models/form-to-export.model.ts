import { ApiProperty } from '@nestjs/swagger';
import type {
  IEvaluationFormTemplate,
  IEvaluationFormToExport,
} from '@sikur/types';
import { QuestionAnswerToExport } from '@/form-question-answer/models/question-answer-to-export.model';

export class EvaluationFormToExport implements IEvaluationFormToExport {
  @ApiProperty({ type: Number })
  formId: IEvaluationFormTemplate['formId'];

  @ApiProperty({ type: Number })
  workId: IEvaluationFormTemplate['workId'];

  @ApiProperty({ type: String })
  personalIdentifier: IEvaluationFormTemplate['personalIdentifier'];

  @ApiProperty({ type: [QuestionAnswerToExport] })
  answers: QuestionAnswerToExport[];
}
