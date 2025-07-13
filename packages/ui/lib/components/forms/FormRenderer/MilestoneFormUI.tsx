import { QuestionTypeEnum } from '@sikur/enums';
import CurrentPartIcon from '@/assets/icons/CurrentPartIcon.svg?react';
import FormPartIcon from '@/assets/icons/FormPartIcon.svg?react';
import { FormPartQuestions } from '@/components/forms/FormPartQuestions/FormPartQuestions';
import type {
  MilestoneFormUIProps,
  RawQuestion,
} from '@/components/forms/FormRenderer/FormRenderer.interface';
import {
  ComponentsContainer,
  MilestoneWrapper,
  FormContainer,
  ButtonContainer,
} from '@/components/forms/FormRenderer/FormRenderer.styles';
import { FormSection } from '@/components/forms/FormSection/FormSection';
import { Milestone } from '@/components/forms/Milestone';
import { OpeningComponent } from '@/components/forms/OpeningComponent/OpeningComponent';
import { SurveyButton } from '@/components/forms/SurveyButton/SurveyButton';

const mapQuestionToRenderableData = (question: RawQuestion) => {
  const questionType = question.question?.questionType
    ?.type as QuestionTypeEnum;
  const content = question.question?.questionContents?.[0] ?? {
    content: '',
  };

  const questionContent: {
    content?: string;
    maxEntries?: number;
    choices?: { value: string; label: string; isSelected: boolean }[];
    scaleOptions?: { value: number; label: string }[];
  } = {
    content: content.content,
    maxEntries: content.maxEntries,
  };

  switch (questionType) {
    case QuestionTypeEnum.MultiChoice:
      questionContent.choices = (content.choices ?? []).map(choice => ({
        value: choice.value,
        label: choice.label ?? choice.value,
        isSelected: choice.isSelected ?? false,
      }));
      break;

    case QuestionTypeEnum.Scale:
      questionContent.scaleOptions = (content.scaleOptions ?? []).map(opt => ({
        value: opt.value,
        label: opt.label,
      }));
      break;
  }

  return {
    index: question.index,
    questionId: question.questionId,
    partId: question.partId,
    question: {
      id: question.index,
      questionType,
      questionContent,
    },
  };
};

export const MilestoneFormUI: React.FC<MilestoneFormUIProps> = ({
  answers,
  onChangeAnswer,
  openingText,
  section,
  index,
  isFinalSection,
  handleSurveyButton,
  surveyButtonDisabled,
}) => {
  return (
    <ComponentsContainer>
      <MilestoneWrapper>
        <Milestone CurrentSectionIcon={CurrentPartIcon} />
      </MilestoneWrapper>
      <FormContainer>
        {index === 0 && openingText && (
          <OpeningComponent openingText={openingText} />
        )}
        <FormSection
          key={section?.id}
          sectionTitle={section?.header ?? ''}
          PartIcon={FormPartIcon}
        >
          {section?.parts?.map(part => (
            <FormPartQuestions
              key={part.id ?? part.index}
              index={part.index}
              formPart={{
                title: part.header,
                subTitle: part.subHeader,
                partQuestions: (part.partQuestions ?? []).map(
                  mapQuestionToRenderableData,
                ),
              }}
              answers={answers}
              onChangeAnswer={onChangeAnswer}
            />
          ))}
        </FormSection>

        <ButtonContainer>
          <SurveyButton
            label={isFinalSection ? 'שלח סקר' : 'הבא'}
            onClick={handleSurveyButton}
            disabled={surveyButtonDisabled}
          />
        </ButtonContainer>
      </FormContainer>
    </ComponentsContainer>
  );
};
