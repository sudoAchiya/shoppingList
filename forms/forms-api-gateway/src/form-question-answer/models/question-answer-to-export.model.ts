import { ApiProperty } from '@nestjs/swagger';
import type {
  IFormQuestionAnswer,
  IQuestion,
  IQuestionAnswerToExport,
} from '@sikur/types';
import { FormQuestionAnswerValue } from '@/form-question-answer/models/form-question-answer-value.model';

export class QuestionAnswerToExport implements IQuestionAnswerToExport {
  @ApiProperty({ type: Number })
  id: IFormQuestionAnswer['id'];

  @ApiProperty({ type: Number })
  formQuestionId: IQuestion['id'];

  @ApiProperty({ type: FormQuestionAnswerValue })
  object: FormQuestionAnswerValue;
}
