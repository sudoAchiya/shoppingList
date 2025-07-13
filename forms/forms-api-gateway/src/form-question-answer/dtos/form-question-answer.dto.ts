import { ApiProperty } from '@nestjs/swagger';
import { IForm, IQuestion } from '@sikur/types';
import { createApiProperty } from '@ultra/common';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { createIdProperty } from '@/utils/swagger/input-examples';

export class FormQuestionAnswerDTO {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty(
    createIdProperty({
      description: 'The id of the form',
    }),
  )
  formId: IForm['id'];

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty(
    createIdProperty({
      description: 'The id of the form question',
    }),
  )
  formQuestionId: IQuestion['id'];

  @IsString()
  @IsNotEmpty()
  @ApiProperty(
    createApiProperty({
      type: 'string',
      description: 'The answer to the question',
    }),
  )
  value: string;
}
