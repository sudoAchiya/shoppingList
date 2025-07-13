import { ApiProperty } from '@nestjs/swagger';
import type { IForm, IFormType } from '@sikur/types';
import { FormType } from '@/evaluation-form-template/models/form-type.model';
import { Section } from '@/evaluation-form-template/models/section.model';

export class Form implements IForm {
  @ApiProperty()
  id: number;

  @ApiProperty({ type: Number })
  formTypeId: IFormType['id'];

  @ApiProperty()
  title: string;

  @ApiProperty()
  year: number;

  @ApiProperty()
  organizationId: string;

  @ApiProperty()
  openingText?: string;

  @ApiProperty({ type: () => FormType, required: false })
  formType?: FormType;

  @ApiProperty({ type: () => [Section], required: false })
  sections?: Section[];
}
