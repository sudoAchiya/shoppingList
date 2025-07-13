import { ApiProperty } from '@nestjs/swagger';
import { QuestionTypeEnum } from '@sikur/enums';
import { IQuestionType } from '@sikur/types';
import { Question } from '@/evaluation-form-template/models/question.model';

export class QuestionType implements IQuestionType {
  @ApiProperty()
  id: number;

  @ApiProperty({ enum: QuestionTypeEnum })
  type: QuestionTypeEnum;

  @ApiProperty()
  description: string;

  @ApiProperty({ type: () => [Question], required: false })
  questions?: Question[];
}
