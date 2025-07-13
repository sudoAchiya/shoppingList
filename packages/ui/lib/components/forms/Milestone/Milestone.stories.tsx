import { Grid } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CurrentPartIcon } from '@/assets';
import { Milestone } from '@/components/forms/Milestone';
import { MilestoneStatus } from '@/components/forms/Milestone/MilestoneStatus';
import { MilestoneProvider } from '@/contexts';

const meta: Meta<typeof Milestone> = {
  title: 'Components/forms/Milestone',
  component: Milestone,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Milestone>;

export const Default: Story = {
  render: () => (
    <MilestoneProvider
      initialSections={[
        {
          sectionNumber: 1,
          sectionTitle: 'Section 1',
          status: MilestoneStatus.COMPLETED,
        },
        {
          sectionNumber: 2,
          sectionTitle: 'Section 2',
          status: MilestoneStatus.COMPLETED,
        },
        {
          sectionNumber: 3,
          sectionTitle: 'Section 3',
          status: MilestoneStatus.COMPLETED,
        },
        {
          sectionNumber: 4,
          sectionTitle: 'Section 4',
          status: MilestoneStatus.COMPLETED,
        },
        {
          sectionNumber: 4,
          sectionTitle: 'Section 4',
          status: MilestoneStatus.COMPLETED,
        },
        {
          sectionNumber: 4,
          sectionTitle: 'Section 4',
          status: MilestoneStatus.COMPLETED,
        },
        {
          sectionNumber: 4,
          sectionTitle: 'Section 4',
          status: MilestoneStatus.CURRENT,
        },
      ]}
    >
      <Grid sx={{ width: '20vw', height: '60vh' }}>
        <Milestone CurrentSectionIcon={CurrentPartIcon} />
      </Grid>
    </MilestoneProvider>
  ),
};
