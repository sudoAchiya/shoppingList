export interface MultiChoiceQuestionProps {
  index: number;
  questionText: string;
  choices: Choice[];
  subTitle?: string;
  maxSelection: number;
  selected: string[];
  onChange: (selected: string[]) => void;
}

interface Choice {
  value: string;
  label: string;
  isSelected: boolean;
}
