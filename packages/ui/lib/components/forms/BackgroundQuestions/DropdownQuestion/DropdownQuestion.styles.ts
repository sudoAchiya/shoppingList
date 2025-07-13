import {
  Button,
  FormControl,
  MenuItem,
  Popper,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import {
  IsMenuOpenProps,
  IsSelectedProps,
} from '@/components/forms/BackgroundQuestions/DropdownQuestion/DropdownQuestion.interface';
import { formsCustomThemes } from '@/themes/forms';

const theme = formsCustomThemes.light;

export const StyledFormControl = styled(FormControl)<IsMenuOpenProps>`
  &.MuiFormControl-root {
    width: 13.3rem;
    height: 2.75rem;
    border: 0.07rem solid
      ${({ $isMenuOpen }) =>
        $isMenuOpen
          ? theme.colors.backgroundQuestions.dropdownActiveBorder
          : theme.colors.backgroundQuestions.dropdownBorder};
    border-radius: 0.25rem;
  }
`;

export const StyledButton = styled(Button)<IsMenuOpenProps>`
  && {
    height: 100%;
    width: 100%;
    justify-content: space-between;
    padding-left: 1rem;
    text-transform: none;
  }

  && .MuiButton-endIcon {
    transition: transform 0.2s ease-in-out;
    transform: ${({ $isMenuOpen }) =>
      $isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const ButtonTypography = styled(Typography)<IsSelectedProps>`
  && {
    font-size: ${theme.typography.backgroundQuestions.dropdownText.fontSize};
    font-weight: ${theme.typography.backgroundQuestions.dropdownText
      .fontWeight};
    color: ${({ $isSelected }) =>
      $isSelected
        ? theme.colors.backgroundQuestions.dropdownActiveText
        : theme.colors.backgroundQuestions.dropdownText};
  }
`;

export const StyledPopper = styled(Popper)`
  && {
    width: 13.1rem;
    max-height: 13.3rem;
    overflow-y: auto;
    border: 0.07rem solid ${theme.colors.backgroundQuestions.dropdownBorder};
    border-radius: 0.25rem;
    box-shadow: 0 0 0.25rem 0 ${theme.colors.backgroundQuestions.dropdownShadow};
    margin-top: 0.5rem !important;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)<IsSelectedProps>`
  && {
    justify-content: space-between;
  }

  &&:hover {
    background-color: ${theme.colors.backgroundQuestions.menuHoverBackground};
  }

  && svg {
    display: ${({ $isSelected }) => ($isSelected ? 'block' : 'none')};
    width: 0.8rem;
    height: 0.6rem;
  }
`;

export const MenuItemTypography = styled(Typography)<IsSelectedProps>`
  && {
    max-width: 10rem;
    font-size: ${theme.typography.backgroundQuestions.menuText.fontSize};
    font-weight: ${({ $isSelected }) =>
      $isSelected
        ? theme.typography.backgroundQuestions.menuActiveText.fontWeight
        : theme.typography.backgroundQuestions.menuText.fontWeight};
    color: ${theme.colors.backgroundQuestions.menuText};
  }
`;

export const StyledHr = styled.hr`
  background-color: ${theme.colors.backgroundQuestions.dropdownSeparator};
  border: 0;
  width: 12.5rem;
  height: 0.07rem;
  margin-top: 0;
  margin-bottom: 0;
`;
