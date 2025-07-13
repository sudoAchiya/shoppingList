import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { KeepImproveValueType } from '@/components/forms/FormPartQuestions/FormPartQuestion.interface';
import { KeepImproveQuestion } from '@/components/forms/KeepImproveQuestion/KeepImproveQuestion';

const meta: Meta<typeof KeepImproveQuestion> = {
  title: 'Components/forms/KeepImproveQuestion',
  component: KeepImproveQuestion,
  parameters: {
    layout: 'centered',
    direction: 'rtl',
  },
};

export default meta;
type Story = StoryObj<typeof KeepImproveQuestion>;

export const defult: Story = {
  render: () => {
    const [value, setValue] = useState<KeepImproveValueType | null>(null);

    return (
      <KeepImproveQuestion
        questionText="ציינו 2 נושאים לשימור ושיפור"
        index={9}
        onChange={setValue}
        value={value}
      />
    );
  },
};
