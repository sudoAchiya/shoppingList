import { ApiProperty } from '@nestjs/swagger';
import { QuestionTypeEnum } from '@sikur/enums';
import { IFormQuestionAnswerValue } from '@sikur/types';
import { IsNotEmpty, IsString } from 'class-validator';

export class FormQuestionAnswerValue implements IFormQuestionAnswerValue {
  @IsNotEmpty()
  @ApiProperty({ enum: QuestionTypeEnum })
  questionType: QuestionTypeEnum;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  value: string;
}
