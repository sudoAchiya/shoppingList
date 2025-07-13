import { ReactNode } from 'react';

export interface FormPartProps {
  title: string;
  subtitle?: string;
  index?: number;
  children: React.ReactNode;
}

export interface FormSectionProps {
  sectionTitle: string;
  formPart?: FormPartProps;
  children?: ReactNode;
  PartIcon: React.ElementType;
}
