import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toggle } from './Toggle';
import { ManIcon, WomanIcon } from '@/assets';

const meta: Meta<typeof Toggle> = {
  title: 'Components/forms/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  args: {
    selected: '',
    isDisabled: false,
    label: '',
    touggleButtons: [
      { label: 'גבר', value: 'MAN', icon: ManIcon },
      { label: 'אישה', value: 'WOMAN', icon: WomanIcon },
    ],
  },
  argTypes: {
    selected: {
      control: 'select',
      options: ['', 'MAN', 'WOMAN'],
      description: 'Currently selected value',
    },
    onSelect: {
      action: 'selected',
      description: 'Callback fired when selection changes',
    },
    touggleButtons: {
      control: 'object',
      description:
        'Array of objects with label, value, and optional icon for each button',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the component is disabled',
    },
    label: {
      control: 'text',
      description: 'Optional label for the toggle group',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    selected: 'MAN',
  },
};

export const Unselected: Story = {
  args: {
    selected: '',
  },
};

export const Disabled: Story = {
  args: {
    selected: 'MAN',
    isDisabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    selected: 'MAN',
    label: 'בחר מגדר',
  },
};
