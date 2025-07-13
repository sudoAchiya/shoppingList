import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, beforeEach } from 'vitest';
import { KeepImproveQuestion } from '@/components/forms/KeepImproveQuestion/KeepImproveQuestion';
import { mockProps } from '@/mocks/formMocks/mockKeepImproveQuestion';

describe('KeepImproveQuestion', () => {
  const mockOnChange = vi.fn();
  const PLACE_HOLDER_LENGTH = 2;
  const REPEAT_LETTERS = 1000;

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('should render the question index and text', () => {
    render(<KeepImproveQuestion {...mockProps} />);

    expect(screen.getByText('1. מה כדאי לשמר ומה לשפר?')).toBeInTheDocument();
  });

  it('should display the keep and improve placeholders', () => {
    render(<KeepImproveQuestion {...mockProps} />);

    expect(
      screen.getByPlaceholderText('הקלידו טקסט לשימור'),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('הקלידו טקסט לשיפור'),
    ).toBeInTheDocument();
  });

  it('should display the current values in inputs', () => {
    render(
      <KeepImproveQuestion
        {...mockProps}
        value={{ keep: 'שימור קיים', improve: 'שיפור קיים' }}
      />,
    );

    expect(screen.getByDisplayValue('שימור קיים')).toBeInTheDocument();
    expect(screen.getByDisplayValue('שיפור קיים')).toBeInTheDocument();
  });

  it('should call onChange when keep value changes', () => {
    render(<KeepImproveQuestion {...mockProps} />);

    const keepInput = screen.getByPlaceholderText('הקלידו טקסט לשימור');
    fireEvent.change(keepInput, { target: { value: 'לשמר' } });
    expect(mockOnChange).toHaveBeenCalledWith({ keep: 'לשמר', improve: '' });
  });

  it('should call onChange when improve value changes', () => {
    render(<KeepImproveQuestion {...mockProps} />);

    const improveInput = screen.getByPlaceholderText('הקלידו טקסט לשיפור');
    fireEvent.change(improveInput, { target: { value: 'לשפר' } });
    expect(mockOnChange).toHaveBeenCalledWith({ improve: 'לשפר', keep: '' });
  });

  it('should render default placeholders if none are provided', () => {
    render(
      <KeepImproveQuestion
        {...mockProps}
        keepPlaceholder={undefined}
        improvePlaceholder={undefined}
      />,
    );

    expect(screen.getAllByPlaceholderText('הקלידו כל דבר')).toHaveLength(
      PLACE_HOLDER_LENGTH,
    );
  });

  it('should call onChange with empty values correctly', () => {
    render(
      <KeepImproveQuestion
        {...mockProps}
        value={{ keep: 'משהו', improve: 'דבר' }}
      />,
    );

    const improveInput = screen.getByPlaceholderText('הקלידו טקסט לשיפור');
    fireEvent.change(improveInput, { target: { value: '' } });
    expect(mockOnChange).toHaveBeenCalledWith({ improve: '', keep: 'משהו' });
  });

  it('should not crash if value is null', () => {
    render(<KeepImproveQuestion {...mockProps} value={null} />);

    const keepInput = screen.getByPlaceholderText('הקלידו טקסט לשימור');
    const improveInput = screen.getByPlaceholderText('הקלידו טקסט לשיפור');

    expect(keepInput).toHaveValue('');
    expect(improveInput).toHaveValue('');
  });

  it('should default to empty string if only one field in value is provided (keep)', () => {
    render(
      <KeepImproveQuestion
        {...mockProps}
        value={{ keep: 'שמור', improve: '' }}
      />,
    );

    expect(screen.getByDisplayValue('שמור')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('הקלידו טקסט לשיפור')).toHaveValue('');
  });

  it('should default to empty string if only one field in value is provided (improve)', () => {
    render(
      <KeepImproveQuestion
        {...mockProps}
        value={{ improve: 'שפר', keep: '' }}
      />,
    );

    expect(screen.getByDisplayValue('שפר')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('הקלידו טקסט לשימור')).toHaveValue('');
  });

  it('should update keep without affecting improve when improve is already filled', () => {
    render(
      <KeepImproveQuestion
        {...mockProps}
        value={{ keep: '', improve: 'שפר' }}
      />,
    );

    const keepInput = screen.getByPlaceholderText('הקלידו טקסט לשימור');
    fireEvent.change(keepInput, { target: { value: 'שמור' } });

    expect(mockOnChange).toHaveBeenCalledWith({ keep: 'שמור', improve: 'שפר' });
  });

  it('should update improve without affecting keep when keep is already filled', () => {
    render(
      <KeepImproveQuestion
        {...mockProps}
        value={{ keep: 'שמור', improve: '' }}
      />,
    );

    const improveInput = screen.getByPlaceholderText('הקלידו טקסט לשיפור');
    fireEvent.change(improveInput, { target: { value: 'שפר' } });

    expect(mockOnChange).toHaveBeenCalledWith({ keep: 'שמור', improve: 'שפר' });
  });

  it('should support long text input', () => {
    const longText = 'א'.repeat(REPEAT_LETTERS);
    render(<KeepImproveQuestion {...mockProps} />);

    const keepInput = screen.getByPlaceholderText('הקלידו טקסט לשימור');
    fireEvent.change(keepInput, { target: { value: longText } });

    expect(mockOnChange).toHaveBeenCalledWith({ keep: longText, improve: '' });
  });
});
