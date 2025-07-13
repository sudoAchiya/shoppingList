import { QuestionTypeEnum } from '@sikur/enums';
import type {
  IEvaluationFormTemplate,
  IFormWithDateStrings,
} from '@sikur/types';

export const convertIsoFields = (
  obj: IFormWithDateStrings,
  dateKeys: string[],
  enumKeys: string[],
): IEvaluationFormTemplate =>
  JSON.parse(JSON.stringify(obj), (key, value) => {
    if (dateKeys.includes(key) && typeof value === 'string') {
      return new Date(value);
    }

    if (
      enumKeys.includes(key) &&
      typeof value === 'string' &&
      Object.values(QuestionTypeEnum).includes(value as QuestionTypeEnum)
    ) {
      return value as QuestionTypeEnum;
    }

    return value;
  });
