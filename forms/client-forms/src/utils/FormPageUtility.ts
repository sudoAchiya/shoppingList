import { QuestionTypeEnum } from '@sikur/enums';
import { AnswerEntry, AnswerValueMap, KeepImproveValueType } from '@sikur/ui';

export const buildAnswerEntry = (
  type: QuestionTypeEnum,
  rawValue: unknown,
): AnswerEntry => {
  switch (type) {
    case QuestionTypeEnum.MultiChoice: {
      let arr: unknown;
      if (typeof rawValue === 'string') {
        try {
          arr = JSON.parse(rawValue);
        } catch {
          arr = rawValue.split(',');
        }
      } else {
        arr = rawValue;
      }

      return {
        type,
        value: Array.isArray(arr) ? (arr as string[]) : [],
      };
    }

    case QuestionTypeEnum.Scale:
      return {
        type,
        value: rawValue != null ? Number(rawValue) : null,
      };

    case QuestionTypeEnum.FreeText:
      return {
        type,
        value: typeof rawValue === 'string' ? rawValue : '',
      };

    case QuestionTypeEnum.KeepImprove: {
      let obj: unknown;
      if (typeof rawValue === 'string') {
        try {
          obj = JSON.parse(rawValue);
        } catch {
          obj = null;
        }
      } else {
        obj = rawValue;
      }

      return {
        type,
        value:
          obj && typeof obj === 'object' ? (obj as KeepImproveValueType) : null,
      };
    }

    default:
      throw new Error(`Unknown question type: ${type}`);
  }
};

export const isEmptyAnswer = (
  questionType: QuestionTypeEnum,
  value: AnswerValueMap[QuestionTypeEnum] | null,
): boolean => {
  if (value == null || value === '') return true;

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (questionType === QuestionTypeEnum.KeepImprove) {
    const ki = value as KeepImproveValueType;
    return (
      (!ki.keep || ki.keep.trim() === '') &&
      (!ki.improve || ki.improve.trim() === '')
    );
  }

  return false;
};
