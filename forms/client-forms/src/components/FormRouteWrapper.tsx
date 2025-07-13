import { MilestoneProvider, MilestoneStatus } from '@sikur/ui';
import { evaluationFormTemplateControllerUpdateLastVisitedSection } from '@/api/generated/generated';
import { useSurveyContext } from '@/context/SurveyContext/SurveyContext';
import { FormPage } from '@/pages/FormPage';

export const FormRouteWrapper = () => {
  const { form } = useSurveyContext();
  const lastSectionIndex = form?.lastVisitedSectionIndex ?? 0;
  const milestoneSections = form?.object?.sections?.map((section, i) => ({
    sectionNumber: i + 1,
    sectionTitle: section.parts?.[0]?.header ?? `חלק ${i + 1}`,

    status:
      i < lastSectionIndex
        ? MilestoneStatus.COMPLETED
        : i === lastSectionIndex
          ? MilestoneStatus.CURRENT
          : MilestoneStatus.NOT_STARTED,
  }));

  return (
    <MilestoneProvider
      initialSections={milestoneSections ?? []}
      onMilestoneChange={async (index: number) => {
        if (form) {
          await evaluationFormTemplateControllerUpdateLastVisitedSection(
            form?.formId,
            { lastVisitedSectionIndex: index },
          );
        }
      }}
    >
      <FormPage />
    </MilestoneProvider>
  );
};
