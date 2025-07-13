import { Typography, Box, TextField } from '@mui/material';
import styled from 'styled-components';
import { formsCustomThemes } from '@/themes/forms';

const theme = formsCustomThemes.light;

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 43.6875rem;
`;

export const SectionTitle = styled(Typography)`
  && {
    margin-bottom: 1rem;
    font-size: ${theme.typography.subQuestionFreeText.mainTitle.fontSize};
    color: ${theme.typography.subQuestionFreeText.mainTitle.color};
    font-weight: ${theme.typography.subQuestionFreeText.mainTitle.fontWeight};
  }
`;

export const SubWrapper = styled(Box)`
  background-color: ${theme.colors.subQuestionFreeText.background};
  border: 0.125rem solid ${theme.colors.subQuestionFreeText.borderColor};
  border-radius: 0.625rem;
  padding: 1rem 1.25rem;
  box-shadow: 0 0.125rem 0.25rem ${theme.colors.subQuestionFreeText.boxShadow};
`;

export const StyledTextField = styled(TextField)`
  && {
    background-color: ${theme.colors.subQuestionFreeText.inputBorderColor};
    border-radius: 0.75rem;
    font-size: ${theme.typography.subQuestionFreeText.textAfterAnswer.fontSize};
    font-weight: ${theme.typography.subQuestionFreeText.textAfterAnswer
      .fontWeight};

    .MuiOutlinedInput-root {
      border-radius: 0.75rem;
      transition: border 0.2s;

      fieldset {
        border: 1px solid transparent;
        transition: border-color 0.2s;
      }

      &.Mui-focused fieldset {
        border-color: ${theme.colors.subQuestionFreeText.selectedBorder};
      }
    }

    fieldset {
      border: none;
    }
  }
`;
