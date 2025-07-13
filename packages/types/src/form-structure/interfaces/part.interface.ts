import type { IPartQuestion, ISection } from '@/form-structure/interfaces';

export interface IPart {
  id: number;
  index: number;
  sectionId: ISection['id'];
  header: string;
  subHeader: string;
  section?: ISection;
  partQuestions?: IPartQuestion[];
}
