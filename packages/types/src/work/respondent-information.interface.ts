import type { IRespondent } from '@/work/respondent.interface';

export interface IRespondentInformation {
  id: number;
  respondentId: IRespondent['id'];
  personalIdentifier: IRespondent['personalIdentifier'];
  firstName: string;
  lastName: string;
  rankCode: number;
  birthDate: Date;
  organizationId: string;
  emergencyPlacement: string;
  extraFields: Record<string, any>;
  respondent?: IRespondent;
}
