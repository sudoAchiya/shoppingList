import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { shouldForwardProp } from '@mui/system';
import type { SurveyButtonProps } from '@/components/forms/SurveyButton/SurveyButton.interface';
import { formsCustomThemes } from '@/themes/forms';

const theme = formsCustomThemes.light;

export const StyledButton = styled(Button, {
  shouldForwardProp: prop => prop !== '$isActive',
})<Partial<SurveyButtonProps>>`
  width: 12.25rem;
  height: 3.5rem;
  border-radius: 0.875rem;
  font-weight: ${theme.typography.subQuestionChoices.button.fontWeight};
  font-size: ${theme.typography.subQuestionChoices.button.fontSize};
  color: ${theme.typography.subQuestionChoices.button.color};
  background: ${theme.colors.button.background};
  opacity: ${props => (props.$isActive ? '1' : '0.7')};
  cursor: ${props => (props.$isActive ? 'pointer' : 'default')};
`;
