import { ApiProperty } from '@nestjs/swagger';
import { ISection } from '@sikur/types';
import { Form } from '@/evaluation-form-template/models/form.model';
import { Part } from '@/evaluation-form-template/models/part.model';

export class Section implements ISection {
  @ApiProperty()
  id: number;

  @ApiProperty()
  index: number;

  @ApiProperty({ type: Number })
  formId: Form['id'];

  @ApiProperty()
  header: string;

  @ApiProperty({ type: () => Form, required: false })
  form?: Form;

  @ApiProperty({ type: () => [Part], required: false })
  parts?: Part[];
}
