import { ApiProperty } from '@nestjs/swagger';
import { IQuestionContent } from '@sikur/types';
import { Question } from '@/evaluation-form-template/models/question.model';

export class QuestionContent implements IQuestionContent {
  @ApiProperty()
  id: number;

  @ApiProperty()
  questionId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  version: number;

  @ApiProperty()
  maxEntries: number;

  @ApiProperty()
  content: string;

  @ApiProperty({ type: () => Question, required: false })
  question?: Question;
}
