import type { ButtonProps } from '@mui/material';

export interface SurveyButtonProps extends Omit<ButtonProps, 'color'> {
  label: string;
  $isActive?: boolean;
  disabled?: boolean;
}
