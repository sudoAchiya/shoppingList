import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { MultiChoiceQuestion } from '@/components/forms/MultiChoiceQuestion/MultiChoiceQuestion';
import type { MultiChoiceQuestionProps } from '@/components/forms/MultiChoiceQuestion/MultiChoiceQuestion.interface';

const meta: Meta<typeof MultiChoiceQuestion> = {
  title: 'Components/forms/MultiChoiceQuestion',
  component: MultiChoiceQuestion,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof MultiChoiceQuestion>;

export const Default: Story = {
  render: args => {
    const [selected, setSelected] = useState<string[]>([]);

    return (
      <MultiChoiceQuestion
        {...args}
        selected={selected}
        onChange={newSelected => {
          setSelected(newSelected);
        }}
      />
    );
  },
  args: {
    index: 1,
    questionText: 'איזו מהאפשרויות הבאות נכונה?',
    subTitle: 'בחר את התשובות שאתה מאמין שהן הכי מתאימות.',
    maxSelection: 2,
    choices: [
      { value: 'a', label: 'אפשרות א', isSelected: false },
      { value: 'b', label: 'אפשרות ב', isSelected: false },
      { value: 'c', label: 'אפשרות ג', isSelected: false },
      { value: 'd', label: 'אפשרות ד', isSelected: false },
    ],
  } as Partial<MultiChoiceQuestionProps>,
};
