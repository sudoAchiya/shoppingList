import { QuestionTypeEnum } from '@sikur/enums';
import { IFormPart } from '@sikur/types';

export const SCALE_QUESTION_INDEX = 1;
export const MULTI_CHOICE_QUESTION_INDEX = 2;
export const FREE_TEXT_QUESTION_INDEX = 3;
export const KEEP_IMPROVE_QUESTION_INDEX = 4;

export const mockFormPart: IFormPart = {
  title: 'כותרת פרק',
  subTitle: 'תת כותרת פרק',
  partQuestions: [
    {
      index: SCALE_QUESTION_INDEX,
      question: {
        id: SCALE_QUESTION_INDEX,
        questionType: QuestionTypeEnum.Scale,
        questionContent: {
          content: 'שאלה 1',
          scaleOptions: [
            { label: '1', value: 1 },
            { label: '5', value: 5 },
          ],
        },
      },
      questionId: 1,
      partId: 0,
    },
    {
      index: MULTI_CHOICE_QUESTION_INDEX,
      question: {
        id: MULTI_CHOICE_QUESTION_INDEX,
        questionType: QuestionTypeEnum.MultiChoice,
        questionContent: {
          content: 'שאלה 2',
          subtitle: 'תת כותרת שאלה',
          choices: [
            { label: 'תשובה 1', value: 'תשובה 1', isSelected: false },
            { label: 'תשובה 2', value: 'תשובה 2', isSelected: false },
            { label: 'תשובה 3', value: 'תשובה 3', isSelected: false },
          ],
          maxEntries: 1,
        },
      },
      questionId: 2,
      partId: 0,
    },
    {
      index: FREE_TEXT_QUESTION_INDEX,
      question: {
        id: FREE_TEXT_QUESTION_INDEX,
        questionType: QuestionTypeEnum.FreeText,
        questionContent: {
          content: 'שאלה 3',
        },
      },
      questionId: 3,
      partId: 0,
    },
    {
      index: KEEP_IMPROVE_QUESTION_INDEX,
      question: {
        id: KEEP_IMPROVE_QUESTION_INDEX,
        questionType: QuestionTypeEnum.KeepImprove,
        questionContent: {
          content: '4 שאלה',
        },
      },
      questionId: 4,
      partId: 0,
    },
  ],
};
