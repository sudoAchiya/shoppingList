import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from '@mui/lab';
import { Box, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { MilestoneStatus } from '@/components/forms/Milestone/MilestoneStatus';
import { formsCustomThemes } from '@/themes/forms';

const { light: theme } = formsCustomThemes;
const dotHeight = 0.5;
const marginImageContainer = 0.5;

interface TimeLineConnectorProps {
  $currentSectionIndex: number;
  $index: number;
  $sectionsLength: number;
}

interface TimelineItemProps {
  $isClickable: boolean;
}

export const MilestoneContainer = styled(Grid)`
  position: relative;
  border-radius: 1rem;
  background: ${theme.colors.milestone.background};
  box-shadow: 0rem 0rem 0.7rem 0rem #6e6e6e2b;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const StyledTimeLine = styled(Timeline)`
  && {
    padding: 1rem;
    margin: 0;
    min-width: 0;
  }
`;

export const StyledTimelineItem = styled(TimelineItem)`
  &&::before {
    content: none;
  }
`;

export const NotCurrentTimelineSection = styled(
  StyledTimelineItem,
)<TimelineItemProps>`
  && {
    margin-right: 0.5rem;
    cursor: ${props => (props.$isClickable ? 'pointer' : 'default')};
  }
`;

export const CurrentTimelineSection = styled(StyledTimelineItem)`
  && {
    border-radius: 0.6rem;
    background: ${theme.colors.milestoneSection.selectedSectionBackground};
    box-shadow: -0.1rem 0.2rem 0.6rem 0rem #0000001a;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.4rem;
  background: ${theme.colors.global.background};
  margin-top: ${marginImageContainer}rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTypography = styled(Typography)`
  && {
    text-align: right;
    line-height: 100%;
    color: ${theme.colors.milestoneSection.completedSectionTitle};
    font-weight: ${theme.typography.milestone.notSelectedSectionTitle
      .fontWeight};
    width: 90%;

    ${theme.baseTheme.breakpoints.down('sm')} {
      width: 60%;
    }

    ${theme.baseTheme.breakpoints.up('sm')} {
      width: 70%;
    }

    ${theme.baseTheme.breakpoints.up('md')} {
      width: 80%;
    }

    ${theme.baseTheme.breakpoints.up('lg')} {
      width: 90%;
    }
  }
`;

export const SectionTitle = styled(StyledTypography)`
  && {
    font-size: ${theme.typography.milestone.selectedSectionTitle.fontSize};
    margin-top: 0.3rem;
  }
`;

export const SectionNumber = styled(StyledTypography)`
  && {
    font-weight: ${theme.typography.milestone.sectionNumber.fontWeight};
    font-size: ${theme.typography.milestone.sectionNumber.fontSize};
  }
`;

export const CurrentSectionNumber = styled(SectionNumber)`
  && {
    color: ${theme.colors.milestoneSection.selectedSectionNumber};
  }
`;

export const NotStartedSectionNumber = styled(SectionNumber)`
  && {
    color: ${theme.colors.milestoneSection.notStartedSectionNumber};
  }
`;

export const CompletedSectionNumber = styled(SectionNumber)`
  && {
    color: ${theme.colors.milestoneSection.completedSectionNumber};
  }
`;

export const CurrentSectionTitle = styled(SectionTitle)`
  && {
    color: ${theme.colors.milestoneSection.selectedSectionTitle};
    font-weight: ${theme.typography.milestone.selectedSectionTitle.fontWeight};
  }
`;

export const CompletedSectionTitle = styled(SectionTitle)`
  && {
    color: ${theme.colors.milestoneSection.completedSectionTitle};
    font-weight: ${theme.typography.milestone.notSelectedSectionTitle
      .fontWeight};
  }
`;

export const NotStartedSectionTitle = styled(SectionTitle)`
  && {
    color: ${theme.colors.milestoneSection.notStartedSectionTitle};
    font-weight: ${theme.typography.milestone.notSelectedSectionTitle
      .fontWeight};
  }
`;

export const StyledTimelineDot = styled(TimelineDot)`
  && {
    padding: 0;
    border-radius: 0.1rem;
    width: 0.5rem;
    height: ${dotHeight}rem;
    margin: 0;
  }
`;

export const CompletedTimelineDot = styled(StyledTimelineDot)`
  && {
    border: 1px solid ${theme.colors.milestoneSection.progressAxisAfterAnswer};
    background-color: ${theme.colors.milestoneSection.progressAxisAfterAnswer};
  }
`;

export const NotStartedTimelineDot = styled(StyledTimelineDot)`
  && {
    border: 1px solid ${theme.colors.milestoneSection.progressAxisBeforeAnswer};
    background-color: ${theme.colors.milestoneSection.progressAxisBeforeAnswer};
  }
`;

export const StyledTimeLineSeparator = styled(TimelineSeparator)`
  && {
    margin-right: 0.7rem;
  }
`;

export const StyledTimelineConnector = styled(TimelineConnector)`
  && {
    flex-grow: 1;
    background-color: ${theme.colors.milestoneSection.progressAxisBeforeAnswer};
    width: 0.06rem;
    margin: 0 auto;
  }
`;

export const CompletedTimeLineConnector = styled(
  StyledTimelineConnector,
)<TimeLineConnectorProps>`
  && {
    background-color: ${theme.colors.milestoneSection.progressAxisAfterAnswer};
    display: ${props =>
      props.$index === props.$sectionsLength - 1 ? 'none' : 'block'};
  }
`;

export const NotCompletedTimeLineConnector = styled(
  StyledTimelineConnector,
)<TimeLineConnectorProps>`
  && {
    background-color: ${theme.colors.milestoneSection.progressAxisBeforeAnswer};
    display: ${props =>
      props.$index === props.$sectionsLength - 1 ? 'none' : 'block'};
  }
`;

export const ComplementaryTimeLineConnector = styled(StyledTimelineConnector)<{
  $status: MilestoneStatus;
}>`
  && {
    background-color: ${props =>
      props.$status === MilestoneStatus.COMPLETED
        ? theme.colors.milestoneSection.progressAxisAfterAnswer
        : theme.colors.milestoneSection.progressAxisBeforeAnswer};
    flex: 0.3;
  }
`;

export const StyledTimeLineContent = styled(TimelineContent)<{
  $isActive?: boolean;
  $isNextOne?: boolean;
  $isLast?: boolean;
}>`
  && {
    ${props =>
      props.$isLast
        ? `
        padding: 
            ${'1rem'};`
        : `padding: 
            ${
              props.$isNextOne
                ? '1rem'
                : props.$isActive
                  ? '0.5rem 1rem'
                  : '0.375rem 1rem'
            };`}
    flex: 0 1 auto;
    width: 100%;
    max-width: 100%;
  }
`;

export const SelectedTimeLineBox = styled(Box)`
  padding: ${theme.baseTheme.spacing(1.5)} 0;
`;
