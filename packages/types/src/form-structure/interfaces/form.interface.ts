import type { IFormType, ISection } from '@/form-structure/interfaces';

export interface IForm {
  id: number;
  formTypeId: IFormType['id'];
  title: string;
  year: number;
  organizationId: string;
  openingText?: string;
  formType?: IFormType;
  sections?: ISection[];
}
