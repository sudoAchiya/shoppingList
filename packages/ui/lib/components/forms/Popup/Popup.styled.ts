import CloseIcon from '@mui/icons-material/Close';
import {
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { formsCustomThemes } from '@/themes/forms';

const theme = formsCustomThemes.light;

export const StyledDialog = styled(Dialog)`
  & .MuiPaper-root {
    border-radius: 1rem;
    box-shadow: 0rem 0.5rem 1.5rem ${theme.colors.footer.boxShadow};
  }
`;

export const SmallCloseIcon = styled(CloseIcon)`
  width: 1rem;
  height: 1rem;
`;

export const CloseIconContainer = styled(IconButton)`
  color: ${theme.colors.footer.closeIcon};
  position: absolute;
  left: 0;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem;
`;

export const CenteredContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled(Box)`
  margin-top: 2rem;
`;

export const TitleText = styled(Typography)`
  font-size: ${theme.typography.footer.mainText.fontSize};
  color: ${theme.typography.footer.mainText.color};
  font-weight: ${theme.typography.footer.mainText.fontWeight};
  margin-bottom: 0.25rem;
`;

export const SubText = styled(Typography)`
  font-size: ${theme.typography.footer.subText.fontSize};
  color: ${theme.typography.footer.subText.color};
  font-weight: ${theme.typography.footer.subText.fontWeight};
`;

export const StyledActions = styled(DialogActions)`
  gap: 0.25rem;
  box-shadow: 0 -0.125rem 0.5rem ${theme.colors.footer.actionsBoxShadow};
  padding: 0.6875rem 0.5rem;
  margin-top: 1rem;
`;

const StyledButton = styled(Button)`
  border-radius: 0.375rem;
  width: 6.25rem;
  height: 1.75rem;
`;

export const CancelButton = styled(StyledButton)`
  background-color: ${theme.colors.footer.buttonCancelBackground};
  color: ${theme.typography.footer.cancelText.color};
  border: 1px solid ${theme.colors.footer.buttonCancelBorder};
  font-size: ${theme.typography.footer.cancelText.fontSize};
  font-weight: ${theme.typography.footer.cancelText.fontWeight};
`;

export const AcceptButton = styled(StyledButton)`
  background-color: ${theme.colors.footer.buttonSaveActiveBackground};
  color: ${theme.typography.footer.confirmButtonText.color};
  font-size: ${theme.typography.footer.confirmButtonText.fontSize};
  font-weight: ${theme.typography.footer.confirmButtonText.fontWeight};
`;
