import { QuestionTypeEnum } from '@sikur/enums';
import { IFormPart } from '@sikur/types';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FormPartQuestions } from '@/components/forms/FormPartQuestions/FormPartQuestions';
import {
  mockFormPart,
  FREE_TEXT_QUESTION_INDEX,
  KEEP_IMPROVE_QUESTION_INDEX,
  MULTI_CHOICE_QUESTION_INDEX,
  SCALE_QUESTION_INDEX,
} from '@/mocks/formMocks/mockFormPart';

describe('FormPartQuestion', () => {
  const mockOnChangeAnswer = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render FormPart with correct title and subtitle', () => {
    render(
      <FormPartQuestions
        index={0}
        formPart={mockFormPart}
        onChangeAnswer={mockOnChangeAnswer}
      />,
    );

    expect(screen.getByText('כותרת פרק')).toBeInTheDocument();
    expect(screen.getByText('תת כותרת פרק')).toBeInTheDocument();
  });

  it('should render ScaleQuestion with correct text and handle change', async () => {
    const { rerender } = render(
      <FormPartQuestions
        index={0}
        formPart={mockFormPart}
        answers={{}}
        onChangeAnswer={mockOnChangeAnswer}
      />,
    );

    const scaleQuestionButtonValue = 5;
    expect(screen.getByText('שאלה 1')).toBeInTheDocument();
    const button = screen.getByRole('button', {
      name: `${scaleQuestionButtonValue}`,
    });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(mockOnChangeAnswer).toHaveBeenCalledWith(
      SCALE_QUESTION_INDEX,
      QuestionTypeEnum.Scale,
      scaleQuestionButtonValue,
    );

    rerender(
      <FormPartQuestions
        index={0}
        formPart={mockFormPart}
        answers={{
          [SCALE_QUESTION_INDEX]: {
            value: scaleQuestionButtonValue,
            type: QuestionTypeEnum.Scale,
          },
        }}
        onChangeAnswer={mockOnChangeAnswer}
      />,
    );

    mockOnChangeAnswer.mockClear();

    const buttonAgain = screen.getByRole('button', {
      name: `${scaleQuestionButtonValue}`,
    });
    fireEvent.click(buttonAgain);

    expect(mockOnChangeAnswer).toHaveBeenCalledWith(
      SCALE_QUESTION_INDEX,
      QuestionTypeEnum.Scale,
      null,
    );
  });

  it('should render MultiChoiceQuestion with correct text and handle single selection limit', async () => {
    const { rerender } = render(
      <FormPartQuestions
        index={0}
        formPart={mockFormPart}
        answers={{}}
        onChangeAnswer={mockOnChangeAnswer}
      />,
    );

    expect(screen.getByText('שאלה 2')).toBeInTheDocument();
    expect(screen.getByText('תת כותרת שאלה')).toBeInTheDocument();
    expect(screen.getByText('ניתן לבחור תשובה אחת')).toBeInTheDocument();

    const firstButtonValue = 'תשובה 1';
    const secondButtonValue = 'תשובה 2';
    const firstButton = screen.getByRole('button', { name: firstButtonValue });
    const secondButton = screen.getByRole('button', {
      name: secondButtonValue,
    });

    expect(mockOnChangeAnswer).not.toHaveBeenCalled();

    fireEvent.click(firstButton);

    rerender(
      <FormPartQuestions
        index={0}
        formPart={mockFormPart}
        answers={{
          [MULTI_CHOICE_QUESTION_INDEX]: {
            value: [firstButtonValue],
            type: QuestionTypeEnum.MultiChoice,
          },
        }}
        onChangeAnswer={mockOnChangeAnswer}
      />,
    );

    expect(mockOnChangeAnswer).toHaveBeenCalledTimes(1);
    expect(mockOnChangeAnswer).toHaveBeenCalledWith(
      MULTI_CHOICE_QUESTION_INDEX,
      QuestionTypeEnum.MultiChoice,
      [firstButtonValue],
    );
    mockOnChangeAnswer.mockClear();

    fireEvent.click(secondButton);
    expect(mockOnChangeAnswer).not.toHaveBeenCalled();

    mockOnChangeAnswer.mockClear();
    fireEvent.click(firstButton);

    rerender(
      <FormPartQuestions
        index={0}
        formPart={mockFormPart}
        answers={{}}
        onChangeAnswer={mockOnChangeAnswer}
      />,
    );

    expect(mockOnChangeAnswer).toHaveBeenCalledTimes(1);
    expect(mockOnChangeAnswer).toHaveBeenCalledWith(
      MULTI_CHOICE_QUESTION_INDEX,
      QuestionTypeEnum.MultiChoice,
      [],
    );
  });

  it('should render FreeTextQuestion with correct text and handle change', async () => {
    const { rerender } = render(
      <FormPartQuestions
        index={0}
        formPart={mockFormPart}
        answers={{}}
        onChangeAnswer={mockOnChangeAnswer}
      />,
    );

    const freeTextQuestionTitle = screen.getByText('3. שאלה 3');
    expect(freeTextQuestionTitle).toBeInTheDocument();

    const freeTextInput = screen.getAllByPlaceholderText('הקלידו כל דבר')[0];
    expect(freeTextInput).toBeInTheDocument();

    expect(mockOnChangeAnswer).not.toHaveBeenCalled();

    const testText = 'תשובה';
    fireEvent.change(freeTextInput, { target: { value: testText } });

    rerender(
      <FormPartQuestions
        index={0}
        formPart={mockFormPart}
        answers={{
          [FREE_TEXT_QUESTION_INDEX]: {
            value: testText,
            type: QuestionTypeEnum.FreeText,
          },
        }}
        onChangeAnswer={mockOnChangeAnswer}
      />,
    );

    expect(mockOnChangeAnswer).toHaveBeenCalledTimes(1);
    expect(mockOnChangeAnswer).toHaveBeenCalledWith(
      FREE_TEXT_QUESTION_INDEX,
      QuestionTypeEnum.FreeText,
      testText,
    );
    expect(freeTextInput).toHaveValue(testText);
  });

  it('should render KeepImproveQuestion with correct text and handle change', async () => {
    const { rerender } = render(
      <FormPartQuestions
        index={0}
        formPart={mockFormPart}
        answers={{}}
        onChangeAnswer={mockOnChangeAnswer}
      />,
    );

    expect(screen.getByText('4. 4 שאלה')).toBeInTheDocument();
    expect(screen.getByText('ציינו 2 נושאים לשימור')).toBeInTheDocument();
    expect(screen.getByText('ציינו 2 נושאים לשיפור')).toBeInTheDocument();

    const firstPlaceHolderIndex = 1;
    const secondPlaceHolderIndex = 2;
    const keepInputElement =
      screen.getAllByPlaceholderText('הקלידו כל דבר')[firstPlaceHolderIndex];
    const improveInputElement =
      screen.getAllByPlaceholderText('הקלידו כל דבר')[secondPlaceHolderIndex];

    expect(keepInputElement).toBeInTheDocument();
    expect(improveInputElement).toBeInTheDocument();

    const keepInputValue = 'תשובה לשימור';
    fireEvent.change(keepInputElement, { target: { value: keepInputValue } });

    rerender(
      <FormPartQuestions
        index={0}
        formPart={mockFormPart}
        answers={{
          [KEEP_IMPROVE_QUESTION_INDEX]: {
            value: { keep: keepInputValue, improve: '' },
            type: QuestionTypeEnum.KeepImprove,
          },
        }}
        onChangeAnswer={mockOnChangeAnswer}
      />,
    );

    expect(mockOnChangeAnswer).toHaveBeenCalledWith(
      KEEP_IMPROVE_QUESTION_INDEX,
      QuestionTypeEnum.KeepImprove,
      { keep: keepInputValue, improve: '' },
    );
    expect(keepInputElement).toHaveValue(keepInputValue);
    mockOnChangeAnswer.mockClear();

    const improveInputValue = 'תשובה לשיפור';
    fireEvent.change(improveInputElement, {
      target: { value: improveInputValue },
    });

    rerender(
      <FormPartQuestions
        index={0}
        formPart={mockFormPart}
        answers={{
          [KEEP_IMPROVE_QUESTION_INDEX]: {
            value: { keep: keepInputValue, improve: improveInputValue },
            type: QuestionTypeEnum.KeepImprove,
          },
        }}
        onChangeAnswer={mockOnChangeAnswer}
      />,
    );

    expect(mockOnChangeAnswer).toHaveBeenCalledWith(
      KEEP_IMPROVE_QUESTION_INDEX,
      QuestionTypeEnum.KeepImprove,
      { keep: keepInputValue, improve: improveInputValue },
    );
    expect(improveInputElement).toHaveValue(improveInputValue);
  });

  it('does not render a question if its type is not in the map', () => {
    const unknownTypeFormPart: IFormPart = {
      ...mockFormPart,
      partQuestions: [
        {
          index: 1,
          question: {
            id: 1,
            questionType: 'UnknownType' as QuestionTypeEnum,
            questionContent: { content: 'This should not appear' },
          },
          questionId: 1,
          partId: 0,
        },
      ],
    };

    render(
      <FormPartQuestions
        index={0}
        formPart={unknownTypeFormPart}
        onChangeAnswer={mockOnChangeAnswer}
      />,
    );

    expect(
      screen.queryByText('This should not appear'),
    ).not.toBeInTheDocument();
  });

  it('should handle many questions answers (hebrew + english)', () => {
    render(
      <FormPartQuestions
        index={0}
        formPart={mockFormPart}
        answers={{
          [FREE_TEXT_QUESTION_INDEX]: {
            value: 'תשובה חופשית',
            type: QuestionTypeEnum.FreeText,
          },
          [KEEP_IMPROVE_QUESTION_INDEX]: {
            value: { keep: 'keep', improve: 'improve' },
            type: QuestionTypeEnum.KeepImprove,
          },
        }}
        onChangeAnswer={mockOnChangeAnswer}
      />,
    );

    const freeTextInput = screen.getByDisplayValue('תשובה חופשית');
    expect(freeTextInput).toBeInTheDocument();
    expect(freeTextInput).toHaveValue('תשובה חופשית');

    const keepTextInput = screen.getByDisplayValue('keep');
    expect(keepTextInput).toBeInTheDocument();
    expect(keepTextInput).toHaveValue('keep');

    const improveTextInput = screen.getByDisplayValue('improve');
    expect(improveTextInput).toBeInTheDocument();
    expect(improveTextInput).toHaveValue('improve');

    expect(mockOnChangeAnswer).not.toHaveBeenCalled();
  });
});
