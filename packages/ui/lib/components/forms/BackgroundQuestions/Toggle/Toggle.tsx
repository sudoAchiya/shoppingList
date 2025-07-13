import { Box, Icon } from '@mui/material';
import { BackgroundQuestionStructure } from '@/components/forms/BackgroundQuestions/BackgroundQuestionStructure/BackgroundQuestionStructure';
import {
  StyledIconBox,
  StyledToggleButton,
  StyledGroupToggleButtonGroup,
  StyledToggleText,
} from '@/components/forms/BackgroundQuestions/Toggle/Toggle.styles';

export interface ToggleButtonProps {
  value: string;
  label: string;
  icon?: React.ElementType;
}

export interface ToggleProps {
  selected: string;
  onSelect: (selected: string) => void;
  touggleButtons: ToggleButtonProps[];
  isDisabled?: boolean;
  label?: string;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
  selected,
  onSelect,
  touggleButtons,
  isDisabled = false,
  label,
}) => {
  const isNotSelectedAndNextAlsoNotSelected = (index: number) =>
    index < touggleButtons.length - 1 &&
    selected !== touggleButtons[index].value &&
    selected !== touggleButtons[index + 1].value;
  return (
    <BackgroundQuestionStructure fieldTitle={label}>
      <StyledGroupToggleButtonGroup
        disabled={isDisabled}
        value={selected}
        exclusive
        onChange={(_, newSelected) => {
          onSelect(newSelected);
        }}
      >
        {touggleButtons.map((touggleButton, i) => (
          <StyledToggleButton
            key={touggleButton.value}
            value={touggleButton.value}
            aria-label={touggleButton.label}
            $addDivider={isNotSelectedAndNextAlsoNotSelected(i)}
          >
            <Box>
              {touggleButton.icon && (
                <StyledIconBox>
                  <Icon component={touggleButton.icon} />
                </StyledIconBox>
              )}
              <StyledToggleText $isSelected={touggleButton.value === selected}>
                {touggleButton.label}
              </StyledToggleText>
            </Box>
          </StyledToggleButton>
        ))}
      </StyledGroupToggleButtonGroup>
    </BackgroundQuestionStructure>
  );
};

export default Toggle;
