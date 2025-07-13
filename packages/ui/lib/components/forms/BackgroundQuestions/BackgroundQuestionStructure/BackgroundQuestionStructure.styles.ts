import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { formsCustomThemes } from '@/themes/forms';

const theme = formsCustomThemes.light;

export const StyledBox = styled(Box)`
  && {
    width: 13.3rem;
  }
`;

export const StyledQuestionTitle = styled(Typography)`
  && {
    color: ${theme.colors.backgroundQuestions.fieldTitle};
    font-weight: ${theme.typography.backgroundQuestions.fieldTitle.fontWeight};
    font-size: ${theme.typography.backgroundQuestions.fieldTitle.fontSize};
    text-align: right;
    margin-bottom: 0.3rem;
  }
`;
