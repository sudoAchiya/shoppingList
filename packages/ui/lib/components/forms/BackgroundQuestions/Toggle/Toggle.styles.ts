import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import { formsCustomThemes } from '@/themes/forms';

const theme = formsCustomThemes.light;

export const StyledIconBox = styled(Box)`
  position: absolute;
  right: 0.5rem;
  display: flex;
`;

export const StyledGroupToggleButtonGroup = styled(ToggleButtonGroup)`
  background-color: ${theme.colors.backgroundQuestions.toggleBackground};
  padding: 0.25rem;
  border: none;
  gap: 0.1rem;
`;

export const StyledToggleButton = styled(ToggleButton)<{
  $addDivider: boolean;
}>`
  && {
    background-color: ${theme.colors.backgroundQuestions.toggleBackground};
    height: 2.375rem;
    width: 6.4rem;
    border: none;
    ${({ $addDivider }) =>
      $addDivider &&
      `border-left:  0.125rem solid ${
        theme.colors.backgroundQuestions.toggleDividerColor
      }`};
    border-radius: 0.25rem;
    padding: 0;
    box-shadow: none;

    &.Mui-selected {
      background-color: ${theme.colors.backgroundQuestions
        .toggleSelectedBackground};
      box-shadow: 0 0.0625rem 0.125rem 0
        ${theme.colors.backgroundQuestions.toggleSelectedBoxShadow};
    }

    &.Mui-disabled {
      border: none;
      ${({ $addDivider }) =>
        $addDivider &&
        `border-left:  0.125rem solid ${
          theme.colors.backgroundQuestions.toggleDividerColor
        }`};
    }
  }
`;

export const StyledToggleText = styled(Typography)<{ $isSelected: boolean }>`
  && {
    font-size: ${({ $isSelected }) =>
      $isSelected
        ? theme.typography.backgroundQuestions.toggleSelected.fontSize
        : theme.typography.backgroundQuestions.toggleNotSelected.fontSize};
    color: ${({ $isSelected }) =>
      $isSelected
        ? theme.typography.backgroundQuestions.toggleSelected.color
        : theme.typography.backgroundQuestions.toggleNotSelected.color};
    font-weight: ${({ $isSelected }) =>
      $isSelected
        ? theme.typography.backgroundQuestions.toggleSelected.fontWeight
        : theme.typography.backgroundQuestions.toggleNotSelected.fontWeight};
  }
`;
