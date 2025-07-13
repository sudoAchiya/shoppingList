import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { FillDateInput } from '@/components/forms/FillDateInput/FillDateInput';

const meta: Meta<typeof FillDateInput> = {
  title: 'Components/forms/FillDateInput',
  component: FillDateInput,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FillDateInput>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | null>(null);
    return <FillDateInput label="תאריך מילוי" date={date} onChange={setDate} />;
  },
};
