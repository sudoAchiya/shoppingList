import { type JSX } from 'react';
import {
  StyledBox,
  StyledQuestionTitle,
} from '@/components/forms/BackgroundQuestions/BackgroundQuestionStructure/BackgroundQuestionStructure.styles';

interface BackgroundQuestionStructureProps {
  fieldTitle?: string;
  children: React.ReactNode;
}

export const BackgroundQuestionStructure = ({
  fieldTitle,
  children,
}: BackgroundQuestionStructureProps): JSX.Element => (
  <StyledBox>
    <StyledQuestionTitle>{fieldTitle}</StyledQuestionTitle>
    {children}
  </StyledBox>
);
