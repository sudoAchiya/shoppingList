import { ApiProperty } from '@nestjs/swagger';
import { IPartQuestion } from '@sikur/types';
import { Part } from '@/evaluation-form-template/models/part.model';
import { Question } from '@/evaluation-form-template/models/question.model';

export class PartQuestion implements IPartQuestion {
  @ApiProperty()
  index: number;

  @ApiProperty({ type: Number })
  questionId: Question['id'];

  @ApiProperty({ type: Number })
  partId: Part['id'];

  @ApiProperty({ type: () => Question, required: false })
  question?: Question;

  @ApiProperty({ type: () => Part, required: false })
  part?: Part;
}
