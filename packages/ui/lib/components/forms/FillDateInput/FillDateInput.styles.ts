import { TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { formsCustomThemes } from '@/themes/forms';

const theme = formsCustomThemes.light;

export const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 0.75rem;
    background-color: ${theme.colors.backgroundQuestions.fieldBackground};
  }

  input {
    text-align: center;
    color: ${theme.typography.backgroundQuestions.fieldText.color};
    font-size: ${theme.typography.backgroundQuestions.fieldText.fontSize};
    font-weight: ${theme.typography.backgroundQuestions.fieldText.fontWeight};
  }

  fieldset {
    border: none;
  }
`;

export const StyledLabel = styled(Typography)`
  margin-bottom: 0.5rem;
  color: ${theme.typography.backgroundQuestions.fieldTitle.color};
  font-size: ${theme.typography.backgroundQuestions.fieldTitle.fontSize};
  font-weight: ${theme.typography.backgroundQuestions.fieldTitle.fontWeight};
`;
