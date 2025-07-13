import { vi } from 'vitest';
import { KeepImproveQuestionProps } from '@/components/forms/KeepImproveQuestion/KeepImproveQuestion.interface';

const mockOnChange = vi.fn();

export const mockProps: KeepImproveQuestionProps = {
  index: 1,
  questionText: 'מה כדאי לשמר ומה לשפר?',
  value: { keep: '', improve: '' },
  onChange: mockOnChange,
  keepPlaceholder: 'הקלידו טקסט לשימור',
  improvePlaceholder: 'הקלידו טקסט לשיפור',
};
