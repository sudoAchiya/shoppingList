import { IEvaluationFormTemplate, ISection } from '@sikur/types';
import type {
  AnswersState,
  AnswerValueMap,
} from '@/components/forms/FormPartQuestions/FormPartQuestion.interface';

export interface FormRendererProps {
  answers: AnswersState;
  onChangeAnswer: <T extends keyof AnswerValueMap>(
    questionId: number,
    questionType: T,
    value: AnswerValueMap[T],
  ) => void;
  form: IEvaluationFormTemplate;
  sectionIndex: number;
  handleSurveyButton?: () => void;
  surveyButtonDisabled?: boolean;
}

export interface MultiChoiceContent {
  choices: {
    value: string;
    label: string;
    isSelected?: boolean;
  }[];
  maxEntries?: number;
}

export interface RawQuestion {
  index: number;
  questionId: number;
  partId: number;
  question?: {
    id: number;
    questionType?: {
      id: number;
      type: string;
      description: string;
    };
    questionContents?: {
      content: string;
      maxEntries?: number;
      choices?: {
        value: string;
        label: string;
        isSelected: boolean;
      }[];
      scaleOptions?: {
        value: number;
        label: string;
      }[];
    }[];
  };
}

export interface QuestionContent {
  content: string;
  maxEntries?: number;
  choices?: { value: string; label?: string; isSelected?: boolean }[];
  scaleOptions?: { value: number; label: string }[];
}

export interface Question {
  id: number;
  questionType: {
    id: number;
    type: string;
    description: string;
  };
  questionContents: QuestionContent[];
}

export interface Part {
  id: number;
  sectionId: number;
  index: number;
  header: string;
  subHeader: string;
  partQuestions?: RawQuestion[];
}

export interface Section {
  id: number;
  index: number;
  formId: number;
  header: string;
  parts?: Part[];
}

export interface MilestoneFormUIProps {
  answers: AnswersState;
  onChangeAnswer: <T extends keyof AnswerValueMap>(
    questionId: number,
    questionType: T,
    value: AnswerValueMap[T],
  ) => void;
  form: IEvaluationFormTemplate | null;
  section?: Section;
  index: number;
  isFinalSection: boolean;
  workId: string;
  openingText?: string;
  handleSurveyButton?: () => void;
  surveyButtonDisabled?: boolean;
}

export type FormObjectWithSections = {
  sections: ISection[];
};
