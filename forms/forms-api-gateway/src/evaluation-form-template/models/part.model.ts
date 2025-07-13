import { ApiProperty } from '@nestjs/swagger';
import { IPart } from '@sikur/types';
import { PartQuestion } from '@/evaluation-form-template/models/part-question.model';
import { Section } from '@/evaluation-form-template/models/section.model';

export class Part implements IPart {
  @ApiProperty()
  id: number;

  @ApiProperty()
  index: number;

  @ApiProperty({ type: Number })
  sectionId: Section['id'];

  @ApiProperty()
  header: string;

  @ApiProperty()
  subHeader: string;

  @ApiProperty({ type: () => Section, required: false })
  section?: Section;

  @ApiProperty({ type: () => [PartQuestion], required: false })
  partQuestions?: PartQuestion[];
}
