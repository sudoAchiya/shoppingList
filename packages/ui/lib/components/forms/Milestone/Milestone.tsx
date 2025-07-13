import { Box, Fade } from '@mui/material';
import { type JSX } from 'react';
import {
  CompletedTimelineDot,
  CurrentTimelineSection,
  MilestoneContainer,
  NotStartedTimelineDot,
  StyledTimeLine,
  ImageContainer,
  NotCurrentTimelineSection,
  ContentContainer,
  CurrentSectionNumber,
  CurrentSectionTitle,
  CompletedSectionNumber,
  NotStartedSectionNumber,
  NotStartedSectionTitle,
  CompletedSectionTitle,
  StyledTimeLineSeparator,
  CompletedTimeLineConnector,
  NotCompletedTimeLineConnector,
  StyledTimeLineContent,
  ComplementaryTimeLineConnector,
  SelectedTimeLineBox,
} from '@/components/forms/Milestone/Milestone.styles';
import { MilestoneStatus } from '@/components/forms/Milestone/MilestoneStatus';
import { useMilestoneContext } from '@/contexts';

export interface SectionType {
  sectionNumber: number;
  sectionTitle: string;
  status: MilestoneStatus;
}

export interface MilestoneProps {
  CurrentSectionIcon: React.ElementType;
}

export const Milestone = ({
  CurrentSectionIcon,
}: MilestoneProps): JSX.Element => {
  const { sections, currentSectionIndex, goToSection } = useMilestoneContext();
  const MAX_LENGTH_PAD_START = 2;
  const currentSectionNumber = (sectionNumber: number) =>
    sectionNumber.toString().padStart(MAX_LENGTH_PAD_START, '0');

  return (
    <MilestoneContainer container>
      <StyledTimeLine>
        {sections.map((section, index) =>
          section.status === MilestoneStatus.CURRENT ? (
            <Fade
              in={index === currentSectionIndex}
              key={`section-${section.sectionNumber}`}
            >
              <SelectedTimeLineBox>
                <CurrentTimelineSection
                  key={index}
                  onClick={() => goToSection(index)}
                >
                  <StyledTimeLineSeparator>
                    <ImageContainer>
                      <CurrentSectionIcon />
                    </ImageContainer>
                  </StyledTimeLineSeparator>
                  <StyledTimeLineContent
                    $isActive
                    $isLast={index === sections.length - 1}
                  >
                    <ContentContainer>
                      <CurrentSectionNumber>
                        {currentSectionNumber(section.sectionNumber)}
                      </CurrentSectionNumber>
                      <CurrentSectionTitle noWrap>
                        {section.sectionTitle}
                      </CurrentSectionTitle>
                    </ContentContainer>
                  </StyledTimeLineContent>
                </CurrentTimelineSection>
              </SelectedTimeLineBox>
            </Fade>
          ) : (
            <NotCurrentTimelineSection
              $isClickable={section.status !== MilestoneStatus.NOT_STARTED}
              key={index}
              onClick={() =>
                section.status !== MilestoneStatus.NOT_STARTED &&
                goToSection(index)
              }
            >
              <StyledTimeLineSeparator>
                {currentSectionIndex + 1 === index && (
                  <ComplementaryTimeLineConnector $status={section.status} />
                )}
                {section.status === MilestoneStatus.COMPLETED ? (
                  <CompletedTimelineDot />
                ) : (
                  <NotStartedTimelineDot />
                )}
                {index < sections.length &&
                  (section.status === MilestoneStatus.COMPLETED ? (
                    <CompletedTimeLineConnector
                      $currentSectionIndex={currentSectionIndex}
                      $index={index}
                      $sectionsLength={sections.length}
                    />
                  ) : (
                    <NotCompletedTimeLineConnector
                      $currentSectionIndex={currentSectionIndex}
                      $index={index}
                      $sectionsLength={sections.length}
                    />
                  ))}
              </StyledTimeLineSeparator>
              <StyledTimeLineContent
                $isNextOne={currentSectionIndex + 1 === index}
              >
                <ContentContainer>
                  {section.status === MilestoneStatus.COMPLETED ? (
                    <>
                      <CompletedSectionNumber>
                        {currentSectionNumber(section.sectionNumber)}
                      </CompletedSectionNumber>
                      <CompletedSectionTitle noWrap>
                        {section.sectionTitle}
                      </CompletedSectionTitle>
                    </>
                  ) : (
                    <>
                      <NotStartedSectionNumber>
                        {currentSectionNumber(section.sectionNumber)}
                      </NotStartedSectionNumber>
                      <NotStartedSectionTitle noWrap>
                        {section.sectionTitle}
                      </NotStartedSectionTitle>
                    </>
                  )}
                </ContentContainer>
              </StyledTimeLineContent>
            </NotCurrentTimelineSection>
          ),
        )}
      </StyledTimeLine>
    </MilestoneContainer>
  );
};
