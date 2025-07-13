import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, beforeEach } from 'vitest';
import { FreeTextQuestion } from '@/components/forms/FreeTextQuestion/FreeTextQuestion';
import type { FreeTextQuestionProps } from '@/components/forms/FreeTextQuestion/FreeTextQuestion.interface';

describe('FreeTextQuestion', () => {
  const mockOnChange = vi.fn();

  const mockProps: FreeTextQuestionProps = {
    index: 1,
    title: 'כתבו את דעתכם',
    placeholder: 'הקלידו טקסט...',
    value: '',
    onChange: mockOnChange,
  };

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('should render question title and placeholder', () => {
    render(<FreeTextQuestion {...mockProps} />);

    expect(screen.getByText('1. כתבו את דעתכם')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('הקלידו טקסט...')).toBeInTheDocument();
  });

  it('should display the current value in the textarea', () => {
    render(<FreeTextQuestion {...mockProps} value="תוכן קיים" />);

    expect(screen.getByDisplayValue('תוכן קיים')).toBeInTheDocument();
  });

  it('should call onChange when user types in the text field', () => {
    render(<FreeTextQuestion {...mockProps} />);

    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'בדיקה' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('בדיקה');
  });

  it('should render without index', () => {
    render(<FreeTextQuestion {...mockProps} index={undefined} />);

    expect(screen.getByText('כתבו את דעתכם')).toBeInTheDocument();
  });

  it('should use default placeholder if none provided', () => {
    render(<FreeTextQuestion {...mockProps} placeholder={undefined} />);

    expect(screen.getByPlaceholderText('הקלידו כל דבר')).toBeInTheDocument();
  });

  it('should allow multiline input', () => {
    render(<FreeTextQuestion {...mockProps} />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', '4');
  });

  it('should handle empty string input', () => {
    render(<FreeTextQuestion {...mockProps} value="קיים" />);

    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: '' } });
    expect(mockOnChange).toHaveBeenCalledWith('');
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
