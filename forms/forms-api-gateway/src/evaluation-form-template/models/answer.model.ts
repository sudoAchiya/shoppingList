import { ApiProperty } from '@nestjs/swagger';
import { IAnswer } from '@sikur/types';
import { Question } from '@/evaluation-form-template/models/question.model';

export class Answer implements IAnswer {
  @ApiProperty()
  id: number;

  @ApiProperty()
  questionId: number;

  @ApiProperty()
  content: string;

  @ApiProperty({ type: () => Question, required: false })
  question?: Question;
}
