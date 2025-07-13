export interface FillDateInputProps {
  label?: string;
  date: Date | null;
  onChange: (date: Date | null) => void;
}
