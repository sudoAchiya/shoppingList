import { AnswerEntry } from '@sikur/ui';
import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import {
  EvaluationFormTemplate,
  FormQuestionAnswer,
} from '@/api/generated/model';

type SurveyContextType = {
  form: EvaluationFormTemplate | null;
  setForm: (form: EvaluationFormTemplate | null) => void;
  answers: Record<FormQuestionAnswer['formQuestionId'], AnswerEntry>;
  setAnswers: Dispatch<
    SetStateAction<Record<FormQuestionAnswer['formQuestionId'], AnswerEntry>>
  >;
};

export const SurveyContext = createContext<SurveyContextType | undefined>(
  undefined,
);

export const useSurveyContext = () => {
  const context = useContext(SurveyContext);
  if (!context) {
    throw new Error(
      'useSurveyContext must be used within a SurveyContextProvider',
    );
  }

  return context;
};
