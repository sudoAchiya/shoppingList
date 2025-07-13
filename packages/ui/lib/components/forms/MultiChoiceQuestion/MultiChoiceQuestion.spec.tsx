import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it } from 'vitest';
import { MultiChoiceQuestion } from '@/components/forms/MultiChoiceQuestion/MultiChoiceQuestion';
import type { MultiChoiceQuestionProps } from '@/components/forms/MultiChoiceQuestion/MultiChoiceQuestion.interface';

describe('MultiChoiceQuestion', () => {
  const mockProps: MultiChoiceQuestionProps = {
    index: 1,
    questionText: 'שאלה',
    choices: [
      { label: 'אופציה 1', value: 'אופציה 1', isSelected: false },
      { label: 'אופציה 2', value: 'אופציה 2', isSelected: false },
      { label: 'אופציה 3', value: 'אופציה 3', isSelected: false },
      { label: 'אופציה 4', value: 'אופציה 4', isSelected: false },
    ],
    subTitle: 'בחר',
    maxSelection: 2,
    selected: [],
    onChange: vi.fn(),
  };

  beforeEach(() => {
    (mockProps.onChange as ReturnType<typeof vi.fn>).mockClear();
    mockProps.choices.forEach(choice => (choice.isSelected = false));
  });

  it('should render the question correctly', () => {
    render(<MultiChoiceQuestion {...mockProps} />);

    expect(screen.getByText('1.')).toBeInTheDocument();
    expect(screen.getByText('שאלה')).toBeInTheDocument();
    expect(screen.getByText('בחר')).toBeInTheDocument();
    expect(screen.getByText('ניתן לבחור עד 2 תשובות')).toBeInTheDocument();
    mockProps.choices.forEach(choice => {
      expect(
        screen.getByRole('button', { name: choice.label }),
      ).toBeInTheDocument();
    });
  });

  it('should call onChange with the correct value when an unselected option is clicked', () => {
    render(<MultiChoiceQuestion {...mockProps} />);

    const firstButton = screen.getByRole('button', { name: 'אופציה 1' });
    fireEvent.click(firstButton);
    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
    expect(mockProps.onChange).toHaveBeenCalledWith(['אופציה 1']);
  });

  it('should call onChange with the updated selected array when an already selected option is clicked (to deselect)', () => {
    render(
      <MultiChoiceQuestion
        {...mockProps}
        selected={['אופציה 1', 'אופציה 2']}
      />,
    );

    const firstButton = screen.getByRole('button', { name: 'אופציה 1' });
    fireEvent.click(firstButton);
    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
    expect(mockProps.onChange).toHaveBeenCalledWith(['אופציה 2']);
  });

  it('should not allow selection beyond maxSelection limit', () => {
    render(
      <MultiChoiceQuestion
        {...mockProps}
        selected={['אופציה 2', 'אופציה 1']}
      />,
    );

    const thirdButton = screen.getByRole('button', { name: 'אופציה 3' });
    fireEvent.click(thirdButton);
    expect(mockProps.onChange).toHaveBeenCalledTimes(0);
  });
});
