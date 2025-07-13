import { Grid, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import { formsCustomThemes } from '@/themes/forms';

const theme = formsCustomThemes.light;

export const QuestionText = styled(Typography)`
  && {
    font-weight: ${theme.typography.subQuestionChoices.title.fontWeight};
    font-size: ${theme.typography.subQuestionChoices.title.fontSize};
    color: ${theme.typography.subQuestionChoices.title.color};
  }
`;
export const ContainerStyle = styled(Grid)`
  background-color: ${theme.colors.subQuestionFreeText.background};
  border: 0.125rem solid ${theme.colors.subQuestionFreeText.borderColor};
  border-radius: 0.625rem;
  padding: 1rem 1.25rem;
  box-shadow: 0 0.125rem 0.25rem ${theme.colors.subQuestionFreeText.boxShadow};
  width: 43.6875rem;
`;

export const QuestinosGrid = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`;

export const QuestionCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuestionLabel = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  gap: 0.3rem;
`;

export const FreeTextInput = styled(TextField).attrs(() => ({
  multiline: true,
  rows: 4,
  fullWidth: true,
}))`
  .MuiOutlinedInput-root {
    min-width: 18rem;
    border-radius: 0.75rem;
    padding: 0.8rem;
    background-color: ${theme.colors.subQuestionFreeText.freeTextBackground};
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    border: 1px solid transparent;
    transition: border-color 0.2s;
    &:focus-within {
      border-color: ${theme.colors.subQuestionFreeText.selectedBorder};
    }
    fieldset {
      border: none;
    }
  }

  .MuiInputBase-inputMultiline {
    padding: 0;
    margin: 0;
    resize: none;
    line-height: 1.5;
    font-size: 1rem;
    font-family: inherit;
  }
`;
