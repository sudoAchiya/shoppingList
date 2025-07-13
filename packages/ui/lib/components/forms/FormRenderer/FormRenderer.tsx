import { FormRendererProps } from '@/components/forms/FormRenderer/FormRenderer.interface';
import { MilestoneFormUI } from '@/components/forms/FormRenderer/MilestoneFormUI';

export const FormRenderer: React.FC<FormRendererProps> = ({
  answers,
  onChangeAnswer,
  form,
  sectionIndex,
  handleSurveyButton,
  surveyButtonDisabled,
}) => {
  const section = form.object.sections?.[sectionIndex];
  if (!section) return <div>Section not found</div>;

  return (
    <MilestoneFormUI
      answers={answers}
      onChangeAnswer={onChangeAnswer}
      form={form}
      section={section}
      index={sectionIndex}
      isFinalSection={sectionIndex === (form.object.sections?.length ?? 0) - 1}
      workId={form.workId.toString()}
      openingText={form.object.openingText}
      handleSurveyButton={handleSurveyButton}
      surveyButtonDisabled={surveyButtonDisabled}
    />
  );
};
