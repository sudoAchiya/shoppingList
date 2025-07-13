export interface ScaleOption<T = number> {
  value: T;
  label?: string;
}

export interface ScaleQuestionProps<T = number> {
  index: number;
  questionText: string;
  scaleOptions: Array<ScaleOption<T>>;
  pickedValue: T | null;
  onChange: (value: T | null) => void;
  isHovered?: boolean;
  onHoverChange?: (hovered: boolean) => void;
}
