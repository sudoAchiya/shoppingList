import { ApiProperty } from '@nestjs/swagger';
import { EvaluationFormTemplate } from '@/evaluation-form-template/evaluation-form-template.entity';

export class ExportedFormsDTO {
  @ApiProperty({ type: [Number] })
  formIds: Array<EvaluationFormTemplate['formId']>;
}
