export interface FreeTextQuestionProps {
  index?: number | string;
  title: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}
