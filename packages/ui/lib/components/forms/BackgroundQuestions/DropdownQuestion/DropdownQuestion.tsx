import { ClickAwayListener, Paper } from '@mui/material';
import { useState, type JSX, Fragment } from 'react';
import { BackgroundQuestionStructure } from '@/components/forms/BackgroundQuestions/BackgroundQuestionStructure/BackgroundQuestionStructure';
import {
  StyledButton,
  StyledFormControl,
  StyledHr,
  StyledMenuItem,
  StyledPopper,
  MenuItemTypography,
  ButtonTypography,
} from '@/components/forms/BackgroundQuestions/DropdownQuestion/DropdownQuestion.styles';

interface DropdownQuestionProps {
  fieldTitle?: string;
  dropdownOptions: string[];
  ArrowIcon: React.ElementType;
  CheckIcon: React.ElementType;
}

export const DropdownQuestion = ({
  fieldTitle,
  dropdownOptions,
  ArrowIcon,
  CheckIcon,
}: DropdownQuestionProps): JSX.Element => {
  const [answer, setAnswer] = useState('');
  const [dropdownRefElement, setDropdownRefElement] =
    useState<null | HTMLElement>(null);
  const open = Boolean(dropdownRefElement);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDropdownRefElement(event.currentTarget);
  };

  const handleMenuItemClick = (optionValue: string) => {
    setAnswer(optionValue);
  };

  const handleMenuClose = () => {
    setDropdownRefElement(null);
  };

  return (
    <BackgroundQuestionStructure fieldTitle={fieldTitle}>
      <StyledFormControl $isMenuOpen={open}>
        <StyledButton
          onClick={handleButtonClick}
          endIcon={<ArrowIcon />}
          $isMenuOpen={open}
        >
          <ButtonTypography noWrap={true} $isSelected={answer !== ''}>
            {answer || 'בחר'}
          </ButtonTypography>
        </StyledButton>
        <StyledPopper
          open={open}
          anchorEl={dropdownRefElement}
          placement="bottom-start"
          disablePortal={false}
        >
          <ClickAwayListener onClickAway={handleMenuClose}>
            <Paper elevation={0}>
              {dropdownOptions.map(option => (
                <Fragment key={option}>
                  <StyledMenuItem
                    key={option}
                    onClick={() => handleMenuItemClick(option)}
                    $isSelected={answer === option}
                  >
                    <MenuItemTypography
                      noWrap={true}
                      $isSelected={answer === option}
                    >
                      {option}
                    </MenuItemTypography>
                    <CheckIcon />
                  </StyledMenuItem>
                  <StyledHr />
                </Fragment>
              ))}
            </Paper>
          </ClickAwayListener>
        </StyledPopper>
      </StyledFormControl>
    </BackgroundQuestionStructure>
  );
};
