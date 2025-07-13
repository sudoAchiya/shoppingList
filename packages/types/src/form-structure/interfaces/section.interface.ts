import type { IForm, IPart } from '@/form-structure/interfaces';

export interface ISection {
  id: number;
  index: number;
  header: string;
  formId: IForm['id'];
  form?: IForm;
  parts?: IPart[];
}
