import { ApiProperty } from '@nestjs/swagger';
import { IQuestionToQuestionDomain } from '@sikur/types';
import { QuestionDomain } from '@/evaluation-form-template/models/question-domain.model';
import { Question } from '@/evaluation-form-template/models/question.model';

export class QuestionToQuestionDomain implements IQuestionToQuestionDomain {
  @ApiProperty()
  questionId: number;

  @ApiProperty()
  questionDomainId: number;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty({ type: () => Question, required: false })
  question?: Question;

  @ApiProperty({ type: () => QuestionDomain, required: false })
  questionDomain?: QuestionDomain;
}
