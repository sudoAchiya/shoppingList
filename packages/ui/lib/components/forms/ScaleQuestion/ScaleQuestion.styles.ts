import { Typography, Button, Grid } from '@mui/material';
import styled from 'styled-components';
import { formsCustomThemes } from '@/themes/forms';

const { light } = formsCustomThemes;

export const IndexWithQuestion = styled(Grid)`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const IndexStyling = styled(Typography)`
  && {
    font-size: ${light.typography.subQuestionNumbers.index.fontSize};
    font-weight: ${light.typography.subQuestionNumbers.index.fontWeight};
    color: ${light.typography.subQuestionNumbers.index.color};
    height: 1rem;
  }
`;

export const DividerContainer = styled(Grid)`
  margin-top: 0.5rem;
  height: 2.125rem;
`;

export const DividerAndOptions = styled(Grid)`
  display: flex;
  gap: 1rem;
`;

export const QuestionText = styled(Typography)`
  && {
    font-size: ${light.typography.subQuestionNumbers.title.fontSize};
    font-weight: ${light.typography.subQuestionNumbers.title.fontWeight};
    color: ${light.typography.subQuestionNumbers.title.color};
  }
`;

export const OptionsAndLabels = styled(Grid)`
  direction: ltr;
`;

export const OptionsRow = styled(Grid)`
  background-color: ${light.colors.subQuestionNumbers.buttonGroupBackground};
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
`;

export const ScaleButton = styled(Button)<{ $isPicked: boolean }>`
  && {
    min-width: unset;
    width: 2.86rem;
    height: 2.125rem;
    border-radius: 0.375rem;
    font-size: ${light.typography.subQuestionNumbers.numbers.fontSize};
    font-weight: ${light.typography.subQuestionNumbers.numbers.fontWeight};
    color: ${({ $isPicked }) =>
      $isPicked
        ? light.colors.subQuestionNumbers.buttonHoverBackground
        : light.colors.subQuestionNumbers.numbers};
    background-color: ${({ $isPicked }) =>
      $isPicked
        ? light.colors.subQuestionNumbers.buttonSelectedBackground
        : light.colors.subQuestionNumbers.buttonBackground};
    transition: all 0.1s ease;

    &:hover {
      background-color: ${({ $isPicked }) =>
        $isPicked
          ? light.colors.subQuestionNumbers.buttonSelectedBackground
          : light.colors.subQuestionNumbers.buttonHoverBackground};
    }

    &:focus {
      outline: none;
    }
  }
`;

export const LabelsRow = styled(Grid).withConfig({
  shouldForwardProp: prop => prop !== '$isVisible',
})<{ $isVisible: boolean }>`
  padding: 0 0.5rem;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  transition:
    opacity 0.2s ease,
    visibility 0.2s ease;
`;

export const LabelItem = styled(Typography)`
  && {
    text-align: center;
    font-size: ${light.typography.subQuestionNumbers.labels.fontSize};
    font-weight: ${light.typography.subQuestionNumbers.labels.fontWeight};
    color: ${light.typography.subQuestionNumbers.labels.color};
    line-height: 0.7rem;
    width: 2.86rem;
  }
`;
