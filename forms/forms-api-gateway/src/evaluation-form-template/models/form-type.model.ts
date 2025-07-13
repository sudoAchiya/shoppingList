import { ApiProperty } from '@nestjs/swagger';
import { IFormType } from '@sikur/types';
import { Form } from '@/evaluation-form-template/models/form.model';

export class FormType implements IFormType {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ type: () => [Form], required: false })
  forms?: Form[];
}
