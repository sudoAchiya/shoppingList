import type { NotifyRule } from '@sikur/enums';
import type { IForm } from '@/form-structure';
import type { IFieldDefinition } from '@/work/field-definition.interface';
import type { IRespondent } from '@/work/respondent.interface';

export interface IWork {
  id: number;
  formId: IForm['id'];
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;
  startAt: Date;
  endAt: Date;
  isPublished: boolean;
  year: number;
  notifyRule: NotifyRule;
  notifyDate: Date | null;
  fieldDefinitions: IFieldDefinition[];
  respondents?: IRespondent[];
}
