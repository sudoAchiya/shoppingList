import { ApiProperty } from '@nestjs/swagger';
import { IQuestion } from '@sikur/types';
import { Answer } from '@/evaluation-form-template/models/answer.model';
import { QuestionContent } from '@/evaluation-form-template/models/question-content.model';
import { QuestionToQuestionDomain } from '@/evaluation-form-template/models/question-to-question-domain.model';
import { QuestionType } from '@/evaluation-form-template/models/question-type.model';

export class Question implements IQuestion {
  @ApiProperty()
  id: number;

  @ApiProperty({ type: Number })
  questionTypeId: QuestionType['id'];

  @ApiProperty({ type: () => QuestionType, required: false })
  questionType?: QuestionType;

  @ApiProperty({ type: () => [Answer], required: false })
  answers?: Answer[];

  @ApiProperty({ type: () => [QuestionToQuestionDomain], required: false })
  questionToQuestionDomains?: QuestionToQuestionDomain[];

  @ApiProperty({ type: () => [QuestionContent], required: false })
  questionContents?: QuestionContent[];
}
