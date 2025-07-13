import type { IForm } from '@/form-structure/interfaces';

export interface IFormType {
  id: number;
  name: string;
  forms?: IForm[];
}
