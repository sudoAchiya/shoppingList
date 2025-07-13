import { PopupProps } from '@/components/forms/Popup/Popup.interface';
import {
  StyledDialog,
  CloseIconContainer,
  CenteredContent,
  StyledActions,
  TitleText,
  SubText,
  CancelButton,
  AcceptButton,
  SmallCloseIcon,
  IconContainer,
} from '@/components/forms/Popup/Popup.styled';

export const Popup: React.FC<PopupProps> = ({
  open,
  onClose,
  onAccept,
  title,
  subText,
  IconComponent,
  cancelText,
  acceptText,
  disableBackdropClick = false,
}) => {
  return (
    <StyledDialog
      open={open}
      onClose={disableBackdropClick ? undefined : onClose}
      maxWidth="xs"
      fullWidth
    >
      <CloseIconContainer onClick={onClose}>
        <SmallCloseIcon />
      </CloseIconContainer>
      <CenteredContent>
        {IconComponent && (
          <IconContainer>
            <IconComponent />
          </IconContainer>
        )}
        <TitleText>{title}</TitleText>
        {subText && <SubText>{subText}</SubText>}
      </CenteredContent>
      <StyledActions>
        {cancelText && (
          <CancelButton onClick={onClose}>{cancelText}</CancelButton>
        )}
        <AcceptButton onClick={onAccept}>{acceptText}</AcceptButton>
      </StyledActions>
    </StyledDialog>
  );
};
