import { SurveyButtonProps } from '@/components/forms/SurveyButton/SurveyButton.interface';
import { StyledButton } from '@/components/forms/SurveyButton/SurveyButton.styles';

export const SurveyButton: React.FC<SurveyButtonProps> = ({
  label,
  $isActive = true,
  ...props
}) => (
  <StyledButton $isActive={$isActive} {...props}>
    {label}
  </StyledButton>
);
