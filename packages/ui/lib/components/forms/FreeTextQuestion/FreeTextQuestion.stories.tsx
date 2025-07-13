import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { FreeTextQuestion } from './FreeTextQuestion';

const meta: Meta<typeof FreeTextQuestion> = {
  title: 'Components/forms/FreeTextQuestion',
  component: FreeTextQuestion,
  parameters: {
    layout: 'centered',
    direction: 'rtl',
  },
};

export default meta;
type Story = StoryObj<typeof FreeTextQuestion>;

export const defult: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <FreeTextQuestion
        index="11"
        title="הסבר/י את הערכויותיך ופרט/י הצעות לשיפור בתחום זה"
        value={value}
        onChange={setValue}
      />
    );
  },
};
