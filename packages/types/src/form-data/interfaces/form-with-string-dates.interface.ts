import type { IEvaluationFormTemplate } from '@/form-data';
import type { IForm } from '@/form-structure';

export type IFormWithDateStrings = Omit<
  IEvaluationFormTemplate,
  'createdAt' | 'updateAt' | 'object' | 'exportedAt'
> & {
  createdAt: string;
  updateAt: string;
  exportedAt: string;
  object: Omit<IForm, 'sections'> & {
    sections: Array<{
      parts: Array<{
        partQuestions: Array<{
          question: {
            questionType: {
              type: string;
            };
          };
        }>;
      }>;
    }>;
  };
};
