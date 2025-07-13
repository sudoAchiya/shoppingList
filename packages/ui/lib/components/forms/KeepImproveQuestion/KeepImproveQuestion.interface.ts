import { KeepImproveValueType } from '@/components/forms/FormPartQuestions/FormPartQuestion.interface';

export interface KeepImproveQuestionProps {
  index: number;
  questionText: string;
  onChange: (keepImproveValue: KeepImproveValueType) => void;
  value: KeepImproveValueType | null;
  keepPlaceholder?: string;
  improvePlaceholder?: string;
}
