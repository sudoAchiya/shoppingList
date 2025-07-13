import type { FormStatus, FormResponseType } from '@sikur/enums';
import type { IRespondentInformation } from '@/work/respondent-information.interface';
import type { IWork } from '@/work/work.interface';

export interface IRespondent {
  id: number;
  workId: IWork['id'];
  personalIdentifier: string;
  createdAt: Date;
  updatedAt: Date;
  responseType: FormResponseType;
  responseStatus: FormStatus;
  work?: IWork;
  respondentInformation?: IRespondentInformation[];
}
