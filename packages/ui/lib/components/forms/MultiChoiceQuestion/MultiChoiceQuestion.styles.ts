import { Button, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { formsCustomThemes } from '@/themes/forms';

const theme = formsCustomThemes.light;

export const QuestionTextAndSubtitleContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

const RightTypography = styled(Typography)`
  text-align: right;
`;

export const StyledOptionButton = styled(Button)<{ isPicked: boolean }>`
  && {
    height: 4.25rem;
    width: 17.5rem;
    padding: 1rem;
    border-radius: 0.75rem;
    background-color: ${({ isPicked }) =>
      isPicked
        ? theme.colors.subQuestionChoices.background
        : theme.colors.subQuestionChoices.buttonBackground};
    color: ${({ isPicked }) =>
      isPicked
        ? theme.colors.subQuestionChoices.textAfterAnswer
        : theme.colors.subQuestionChoices.buttonRegularText};
    border: ${({ isPicked }) =>
      isPicked
        ? `1px solid ${theme.colors.subQuestionChoices.buttonSelectedBorder}`
        : 'none'};
    box-shadow: 0 0.125rem 0.25rem ${theme.colors.subQuestionChoices.boxShadow};
    transition:
      background-color 0.2s,
      color 0.2s,
      border-color 0.2s,
      box-shadow 0.2s;
  }

  &&:hover {
    background-color: ${theme.colors.subQuestionChoices.buttonBackgroundHover};
  }
`;

export const IndexContainer = styled(Grid)`
  display: flex;
  height: 2rem;
  align-items: center;
`;

export const SubtitleStyle = styled(RightTypography)`
  color: ${theme.typography.subQuestionChoices.subTitle.color};
  font-size: ${theme.typography.subQuestionChoices.subTitle.fontSize};
  font-weight: ${theme.typography.subQuestionChoices.subTitle.fontWeight};
`;

export const QuestionAndIndexContainer = styled(Grid)`
  display: flex;
  gap: 0.5rem;
`;

export const QuestionAndIndexText = styled(RightTypography)`
  && {
    font-weight: ${theme.typography.subQuestionChoices.title.fontWeight};
    font-size: ${theme.typography.subQuestionChoices.title.fontSize};
    color: ${theme.typography.subQuestionChoices.title.color};
  }
`;

export const MaxSelectionStyle = styled(RightTypography)`
  && {
    color: ${theme.typography.subQuestionChoices.possibleAnswers.color};
    font-size: ${theme.typography.subQuestionChoices.possibleAnswers.fontSize};
    font-weight: ${theme.typography.subQuestionChoices.possibleAnswers
      .fontWeight};
    margin-top: 0.5rem;
  }
`;

export const ButtonGrid = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
  max-width: 35rem;
`;
