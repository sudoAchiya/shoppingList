import type { Meta, StoryObj } from '@storybook/react-vite';
import Logo from '@/assets/icons/AirForceLogo.svg?react';
import MenuIcon from '@/assets/icons/MenuIcon.svg?react';
import { Navbar } from '@/components/forms/Navbar/Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/forms/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    MenuIcon,
    Logo,
    systemNote: 'משרד הבריאות - לשכת הסטטיסטיקה',
    surveyTitle: 'סקר בריאות',
    surveyYear: 2025,
  },
};
