import { QuestionTypeEnum } from '@sikur/enums';
import { IFormPartQuestion } from '@sikur/types';
import FormPart from '@/components/forms/FormPart/FormPart';
import type {
  QuestionRendererProps,
  AnswerValueMap,
  KeepImproveValueType,
} from '@/components/forms/FormPartQuestions/FormPartQuestion.interface';
import { FreeTextQuestion } from '@/components/forms/FreeTextQuestion/FreeTextQuestion';
import { KeepImproveQuestion } from '@/components/forms/KeepImproveQuestion/KeepImproveQuestion';
import { MultiChoiceQuestion } from '@/components/forms/MultiChoiceQuestion';
import { ScaleQuestion } from '@/components/forms/ScaleQuestion';

export const FormPartQuestions: React.FC<QuestionRendererProps> = ({
  index,
  formPart,
  answers = {},
  onChangeAnswer,
}) => {
  const questionComponentMap: Record<
    QuestionTypeEnum,
    (
      question: IFormPartQuestion,
      answerValue: AnswerValueMap[QuestionTypeEnum],
    ) => React.ReactElement | null
  > = {
    [QuestionTypeEnum.Scale]: ({ question, questionId }, value) => (
      <ScaleQuestion
        key={question.id}
        index={question.id}
        questionText={question.questionContent.content ?? ''}
        scaleOptions={question.questionContent.scaleOptions || []}
        pickedValue={typeof value === 'number' ? value : null}
        onChange={(value: number | null) =>
          onChangeAnswer(questionId, QuestionTypeEnum.Scale, value)
        }
      />
    ),

    [QuestionTypeEnum.MultiChoice]: ({ question, questionId }, value) => (
      <MultiChoiceQuestion
        key={question.id}
        index={question.id}
        questionText={question.questionContent.content ?? ''}
        subTitle={question.questionContent.subtitle}
        choices={question.questionContent.choices || []}
        selected={Array.isArray(value) ? value : []}
        maxSelection={question.questionContent.maxEntries || 1}
        onChange={(value: string[]) =>
          onChangeAnswer(questionId, QuestionTypeEnum.MultiChoice, value)
        }
      />
    ),

    [QuestionTypeEnum.FreeText]: ({ question, questionId }, value) => (
      <FreeTextQuestion
        key={question.id}
        index={question.id}
        title={question.questionContent.content ?? ''}
        value={typeof value === 'string' ? value : ''}
        onChange={(val: string) =>
          onChangeAnswer(questionId, QuestionTypeEnum.FreeText, val)
        }
      />
    ),

    [QuestionTypeEnum.KeepImprove]: ({ question, questionId }, value) => (
      <KeepImproveQuestion
        key={question.id}
        index={question.id}
        questionText={question.questionContent.content ?? ''}
        value={value as KeepImproveValueType}
        onChange={value =>
          onChangeAnswer(questionId, QuestionTypeEnum.KeepImprove, value)
        }
      />
    ),
  };

  return (
    <FormPart index={index} title={formPart.title} subtitle={formPart.subTitle}>
      {formPart.partQuestions?.map(partQuestion => {
        const value = answers[partQuestion.questionId]?.value ?? null;
        return questionComponentMap[
          partQuestion.question.questionType as QuestionTypeEnum
        ]?.(partQuestion, value);
      })}
    </FormPart>
  );
};
