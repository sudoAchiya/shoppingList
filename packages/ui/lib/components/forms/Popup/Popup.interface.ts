export interface PopupProps {
  open: boolean;
  onClose?: () => void;
  onAccept?: () => void;
  title: string;
  subText?: string;
  IconComponent?: React.ElementType;
  cancelText?: string;
  acceptText: string;
  disableBackdropClick?: boolean;
}
