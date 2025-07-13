import { QuestionTypeEnum } from '@sikur/enums';
import { type IFormPart } from '@sikur/types';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type {
  QuestionRendererProps,
  AnswersState,
  AnswerValueMap,
  AnswerEntry,
} from '@/components/forms/FormPartQuestions/FormPartQuestion.interface';
import { FormPartQuestions } from '@/components/forms/FormPartQuestions/FormPartQuestions';

const meta: Meta<typeof FormPartQuestions> = {
  title: 'Components/forms/FormPartQuestions',
  component: FormPartQuestions,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FormPartQuestions>;

const exampleFormPart: IFormPart = {
  title: 'שיתוף פעולה בצוות',
  subTitle: 'הערכת עבודת הצוות',
  partQuestions: [
    {
      index: 1,
      question: {
        id: 1,
        questionType: QuestionTypeEnum.Scale,
        questionContent: {
          content: 'הצוות שלי מתקשר בצורה אפקטיבית',
          scaleOptions: [
            { value: 1, label: 'לא מסכים בכלל' },
            { value: 2, label: 'לא מסכים' },
            { value: 3, label: 'ניטרלי' },
            { value: 4, label: 'מסכים' },
            { value: 5, label: 'מסכים מאוד' },
          ],
        },
      },
      questionId: 1,
      partId: 0,
    },
    {
      index: 1,
      question: {
        id: 2,
        questionType: QuestionTypeEnum.MultiChoice,
        questionContent: {
          content: 'מהם הכלים שהצוות שלך משתמש בהם לתקשורת?',
          subtitle: 'בחר את כל האפשרויות הרלוונטיות',
          maxEntries: 3,
          choices: [
            { value: 'email', label: 'דואר אלקטרוני', isSelected: false },
            { value: 'slack', label: 'Slack', isSelected: false },
            { value: 'zoom', label: 'Zoom', isSelected: false },
            { value: 'phone', label: 'שיחות טלפון', isSelected: false },
            {
              value: 'in-person',
              label: 'פגישות פנים אל פנים',
              isSelected: false,
            },
            { value: 'whatsapp', label: 'WhatsApp', isSelected: false },
          ],
        },
      },
      questionId: 2,
      partId: 0,
    },
    {
      index: 2,
      question: {
        id: 3,
        questionType: QuestionTypeEnum.Scale,
        questionContent: {
          content: 'אני מרגיש שמקשיבים לי בצוות',
          scaleOptions: [
            { value: 1, label: 'לא מסכים בכלל' },
            { value: 2, label: 'לא מסכים' },
            { value: 3, label: 'ניטרלי' },
            { value: 4, label: 'מסכים' },
            { value: 5, label: 'מסכים מאוד' },
          ],
        },
      },
      questionId: 3,
      partId: 0,
    },
    {
      index: 3,
      question: {
        id: 4,
        questionType: QuestionTypeEnum.MultiChoice,
        questionContent: {
          content: 'מה אתה הכי מעריך בצוות שלך?',
          subtitle: 'בחר עד שלוש תשובות',
          maxEntries: 3,
          choices: [
            { value: 'support', label: 'תמיכה הדדית', isSelected: false },
            { value: 'trust', label: 'אמון', isSelected: false },
            { value: 'initiative', label: 'יוזמה אישית', isSelected: false },
            { value: 'creativity', label: 'יצירתיות', isSelected: false },
            { value: 'leadership', label: 'מנהיגות', isSelected: false },
          ],
        },
      },
      questionId: 4,
      partId: 0,
    },
  ],
};

function createAnswerEntry<T extends keyof AnswerValueMap>(
  type: T,
  value: AnswerValueMap[T],
): Extract<AnswerEntry, { type: T }> {
  return { type, value } as Extract<AnswerEntry, { type: T }>;
}

export const Default: Story = {
  render: args => {
    const [answers, setAnswers] = useState<AnswersState>({});

    const handleChangeAnswer = <T extends keyof AnswerValueMap>(
      questionId: number,
      questionType: T,
      value: AnswerValueMap[T],
    ) => {
      setAnswers(prev => ({
        ...prev,
        [questionId]: createAnswerEntry(questionType, value),
      }));
    };

    return (
      <FormPartQuestions
        {...args}
        answers={answers}
        onChangeAnswer={handleChangeAnswer}
      />
    );
  },
  args: {
    index: 0,
    formPart: exampleFormPart,
  } as Partial<QuestionRendererProps>,
};
