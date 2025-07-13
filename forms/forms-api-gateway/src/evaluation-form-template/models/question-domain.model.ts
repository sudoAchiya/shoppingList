import { ApiProperty } from '@nestjs/swagger';
import { IQuestionDomain } from '@sikur/types';
import { QuestionToQuestionDomain } from '@/evaluation-form-template/models/question-to-question-domain.model';

export class QuestionDomain implements IQuestionDomain {
  @ApiProperty()
  id: number;

  @ApiProperty()
  content: string;

  @ApiProperty({ type: () => [QuestionToQuestionDomain], required: false })
  questionToQuestionDomains?: QuestionToQuestionDomain[];
}
