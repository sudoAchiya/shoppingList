import type { Meta, StoryObj } from '@storybook/react-vite';
import MailboxIcon from '@/assets/icons/MailboxIcon.svg?react';
import { Popup } from '@/components/forms/Popup/Popup';

const meta: Meta<typeof Popup> = {
  title: 'Components/forms/Popup',
  component: Popup,
  args: {
    open: true,
    onClose: () => alert('Closed'),
    onAccept: () => alert('Accepted'),
    title: 'הסקר נשלח בהצלחה!',
    subText: 'תודה רבה על מילוי השאלון',
    IconComponent: MailboxIcon,
    cancelText: 'ביטול',
    acceptText: 'אישור',
    disableBackdropClick: false,
  },
};

export default meta;

type Story = StoryObj<typeof Popup>;

export const Default: Story = {};
