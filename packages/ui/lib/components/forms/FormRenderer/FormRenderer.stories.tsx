import { QuestionTypeEnum } from '@sikur/enums';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  AnswersState,
  AnswerValueMap,
  KeepImproveValueType,
} from '@/components/forms/FormPartQuestions/FormPartQuestion.interface';
import { FormRenderer } from '@/components/forms/FormRenderer/FormRenderer';
import exampleData from '@/components/forms/FormRenderer/exampleData.json';
import { MilestoneStatus } from '@/components/forms/Milestone/MilestoneStatus';
import { MilestoneProvider } from '@/contexts';
import { convertIsoFields } from '@/utils/dates';

type NestedAnswersState = {
  [formId: string]: {
    [sectionIndex: string]: {
      [questionId: number]: {
        type: QuestionTypeEnum;
        value: string | string[] | number | KeepImproveValueType | null;
      };
    };
  };
};

const meta: Meta<typeof FormRenderer> = {
  title: 'Pages/forms/FormRenderer',
  component: FormRenderer,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FormRenderer>;

const FormWithAnswers = () => {
  const [answers, setAnswers] = useState<NestedAnswersState>({});
  const workId = '0';
  const [sectionIndex, setSectionIndex] = useState(0);
  const section = exampleData?.object.sections[Number(sectionIndex)];
  const handleSurveyButton = () => {
    if (sectionIndex < exampleData.object.sections.length - 1) {
      setSectionIndex(prev => prev + 1);
    }
  };
  const handleChangeAnswer = <T extends keyof AnswerValueMap>(
    questionId: number,
    questionType: T,
    value: AnswerValueMap[T],
  ) => {
    setAnswers(prev => ({
      ...prev,
      [workId]: {
        ...prev[workId],
        [sectionIndex]: {
          ...prev[workId]?.[sectionIndex],
          [questionId]: {
            type: questionType,
            value,
          },
        },
      },
    }));
  };

  if (!exampleData || !section) return <div>Form or section not found</div>;
  const milestoneSections = exampleData.object.sections.map((sections, i) => ({
    sectionNumber: i + 1,
    sectionTitle: sections.parts[0]?.header ?? `חלק ${i + 1}`,
    status:
      i < 0
        ? MilestoneStatus.COMPLETED
        : i === 0
          ? MilestoneStatus.CURRENT
          : MilestoneStatus.NOT_STARTED,
  }));
  return (
    <MilestoneProvider initialSections={milestoneSections}>
      <FormRenderer
        answers={answers[workId]?.[sectionIndex] as AnswersState}
        onChangeAnswer={handleChangeAnswer}
        form={convertIsoFields(
          exampleData,
          ['createdAt', 'updatedAt', 'exportedAt'],
          ['type'],
        )}
        sectionIndex={Number(sectionIndex)}
        handleSurveyButton={handleSurveyButton}
      />
    </MilestoneProvider>
  );
};

export const Default: Story = {
  render: () => <FormWithAnswers />,
};
