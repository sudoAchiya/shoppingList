import { QuestionTypeEnum } from '@sikur/enums';
import { IFormWithDateStrings } from '@sikur/types';
import {
  FormRenderer,
  AnswerValueMap,
  useMilestoneContext,
  FormObjectWithSections,
  Popup,
  MailboxIcon,
  convertIsoFields,
  AnswerEntry,
} from '@sikur/ui';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  formQuestionAnswerControllerAnswerForQuestion,
  formQuestionAnswerControllerDeleteFormQuestionAnswer,
  useEvaluationFormTemplateControllerGetEvaluationFormTemplatesByWorkId,
  useEvaluationFormTemplateControllerSubmitForm,
  useFormQuestionAnswerControllerGetAllAnswersByFormId,
} from '@/api/generated/generated';
import { FormQuestionAnswer } from '@/api/generated/model';
import { useSurveyContext } from '@/context/SurveyContext/SurveyContext';
import { buildAnswerEntry, isEmptyAnswer } from '@/utils/FormPageUtility';

export const FormPage: React.FC = () => {
  const workId =
    useParams<{
      workId: string;
    }>().workId ?? '';

  const { form, setForm, answers, setAnswers } = useSurveyContext();
  const { currentSectionIndex, goToSection } = useMilestoneContext();
  const navigate = useNavigate();

  const {
    data: formData,
    isLoading: formLoading,
    error: formError,
  } = useEvaluationFormTemplateControllerGetEvaluationFormTemplatesByWorkId(
    +workId,
  );

  const { data: answersData } =
    useFormQuestionAnswerControllerGetAllAnswersByFormId(formData?.formId!, {
      query: { enabled: Boolean(formData?.formId) },
    });

  const {
    data: submitResponse,
    mutate: submitForm,
    isPending: isSubmitting,
  } = useEvaluationFormTemplateControllerSubmitForm();

  useEffect(() => {
    if (!formData) return;

    const currentFetchedSection = formData.lastVisitedSectionIndex ?? 0;

    goToSection(currentFetchedSection);
    setForm(formData);
  }, [formData]);

  useEffect(() => {
    if (!answersData) return;

    const answersMap: Record<
      FormQuestionAnswer['formQuestionId'],
      AnswerEntry
    > = {};

    answersData.forEach(answer => {
      answersMap[answer.formQuestionId] = buildAnswerEntry(
        answer.object.questionType as QuestionTypeEnum,
        answer.object.value,
      );
    });

    setAnswers(answersMap);
  }, [answersData]);

  const setAnswer = (
    formQuestionId: number,
    questionType: QuestionTypeEnum,
    value: AnswerValueMap[QuestionTypeEnum] | null,
  ) => {
    setAnswers(prev => ({
      ...prev,
      [formQuestionId]: buildAnswerEntry(questionType, value),
    }));
  };

  const handleChangeAnswer = async (
    formQuestionId: number,
    questionType: QuestionTypeEnum,
    value: AnswerValueMap[QuestionTypeEnum] | null,
  ) => {
    if (!form) return;

    if (isEmptyAnswer(questionType, value)) {
      setAnswer(formQuestionId, questionType, null);

      await formQuestionAnswerControllerDeleteFormQuestionAnswer(
        form.formId,
        formQuestionId,
      );

      return;
    }

    const serialized =
      questionType === QuestionTypeEnum.MultiChoice ||
      questionType === QuestionTypeEnum.KeepImprove
        ? JSON.stringify(value)
        : String(value);

    setAnswer(formQuestionId, questionType, serialized);

    await formQuestionAnswerControllerAnswerForQuestion({
      formId: form.formId,
      formQuestionId,
      value: serialized,
    });
  };

  const handleSubmitForm = async () => {
    if (!form) return;

    submitForm({ formId: form.formId });
  };

  const handleNextSection = () => {
    const nextIndex = +currentSectionIndex + 1;
    const object = form?.object as FormObjectWithSections | undefined;
    if (object?.sections) {
      if (nextIndex < object.sections.length) goToSection(nextIndex);
      else {
        handleSubmitForm();
      }
    }
  };

  const handleSubmitPopUp = () => navigate('/');

  if (formLoading) {
    return <div>Loading...</div>;
  }

  if (formError) {
    return (
      <div>
        <p>Failed to load form.</p>
        <pre>{formError?.message}</pre>
      </div>
    );
  }

  if (!form) {
    return <div>Setting up form...</div>;
  }

  return (
    <>
      <FormRenderer
        answers={answers}
        onChangeAnswer={handleChangeAnswer}
        form={convertIsoFields(
          form as IFormWithDateStrings,
          ['createdAt', 'updateAt', 'exportedAt'],
          ['type'],
        )}
        sectionIndex={+currentSectionIndex}
        handleSurveyButton={handleNextSection}
        surveyButtonDisabled={isSubmitting}
      />

      {submitResponse && (
        <Popup
          open
          title="הסקר נשלח בהצלחה!"
          subText="תודה רבה על מילוי השאלון"
          IconComponent={MailboxIcon}
          onClose={handleSubmitPopUp}
          onAccept={handleSubmitPopUp}
          acceptText="אישור"
          disableBackdropClick
        />
      )}
    </>
  );
};
