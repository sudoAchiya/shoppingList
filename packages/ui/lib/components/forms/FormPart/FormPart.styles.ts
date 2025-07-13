import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { formsCustomThemes } from '@/themes/forms';

const theme = formsCustomThemes.light;

export const StyledTypography = styled(Typography)`
  text-align: right;
`;

export const TitelsContainer = styled(Grid)`
  margin-bottom: 2rem;
`;

export const FormTitle = styled(StyledTypography)`
  && {
    color: ${theme.colors.mainQuestion.mainTitle};
    font-size: ${theme.typography.mainQuestion.mainTitle.fontSize};
    font-weight: ${theme.typography.mainQuestion.mainTitle.fontWeight};
  }
`;

export const FormSubtitle = styled(StyledTypography)`
  && {
    color: ${theme.colors.mainQuestion.text};
    font-size: ${theme.typography.mainQuestion.text.fontSize};
    font-weight: ${theme.typography.mainQuestion.text.fontWeight};
  }
`;

export const ChildrenContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ContainerStyle = styled(Grid)`
  padding: 1rem;
`;
