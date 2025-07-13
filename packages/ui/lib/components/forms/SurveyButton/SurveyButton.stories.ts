import type { Meta, StoryObj } from '@storybook/react-vite';
import { SurveyButton } from './SurveyButton';

const meta: Meta<typeof SurveyButton> = {
  title: 'Components/forms/SurveyButton',
  component: SurveyButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof SurveyButton>;

export const Default: Story = {
  args: {
    label: 'שלח סקר',
    $isActive: true,
  },
};

export const Inactive: Story = {
  args: {
    label: 'שלח סקר',
    $isActive: false,
  },
};
