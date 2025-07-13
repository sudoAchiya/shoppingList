import type { Meta, StoryObj } from '@storybook/react-vite';
import { RespondentCard } from '@/components/management/RespondentCard/RespondentCard';

const meta: Meta<typeof RespondentCard> = {
  title: 'Components/management/RespondentCard',
  component: RespondentCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof RespondentCard>;

export const Default: Story = {
  render: () => (
    <RespondentCard
      personalIdentifier="1234567"
      firstName="אבנר"
      lastName="ירושלמי"
      avatarUrl="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
    />
  ),
};
