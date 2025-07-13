import { AnswerEntry } from '@sikur/ui';
import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  EvaluationFormTemplate,
  FormQuestionAnswer,
} from '@/api/generated/model';
import { SurveyContext } from '@/context/SurveyContext/SurveyContext';

export const SurveyProvider = ({ children }: { children: ReactNode }) => {
  const [form, setForm] = useState<EvaluationFormTemplate | null>(null);
  const [answers, setAnswers] = useState<
    Record<FormQuestionAnswer['formQuestionId'], AnswerEntry>
  >({});

  return (
    <SurveyContext.Provider value={{ form, setForm, answers, setAnswers }}>
      {children}
    </SurveyContext.Provider>
  );
};
