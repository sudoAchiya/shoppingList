import { Container } from '@mui/material';
import type { MultiChoiceQuestionProps } from '@/components/forms/MultiChoiceQuestion/MultiChoiceQuestion.interface';
import {
  ButtonGrid,
  IndexContainer,
  QuestionTextAndSubtitleContainer,
  QuestionAndIndexContainer,
  StyledOptionButton,
  SubtitleStyle,
  QuestionAndIndexText,
  MaxSelectionStyle,
} from '@/components/forms/MultiChoiceQuestion/MultiChoiceQuestion.styles';

export const MultiChoiceQuestion: React.FC<MultiChoiceQuestionProps> = ({
  index,
  questionText,
  choices,
  subTitle,
  maxSelection,
  selected,
  onChange,
}) => {
  const toggleSelect = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter(v => v !== value)
      : [...selected, value];

    if (newSelected.length > maxSelection) return;

    onChange(newSelected);
  };

  return (
    <Container>
      <QuestionAndIndexContainer>
        <IndexContainer>
          <QuestionAndIndexText>{index}.</QuestionAndIndexText>
        </IndexContainer>
        <QuestionTextAndSubtitleContainer>
          <QuestionAndIndexText>{questionText}</QuestionAndIndexText>
          <SubtitleStyle>{subTitle}</SubtitleStyle>
          <MaxSelectionStyle>
            {maxSelection === 1
              ? 'ניתן לבחור תשובה אחת'
              : `ניתן לבחור עד ${maxSelection} תשובות`}
          </MaxSelectionStyle>
        </QuestionTextAndSubtitleContainer>
      </QuestionAndIndexContainer>
      <ButtonGrid>
        {choices.map(choice => (
          <StyledOptionButton
            key={choice.value}
            isPicked={selected.includes(choice.value)}
            onClick={() => toggleSelect(choice.value)}
          >
            {choice.label}
          </StyledOptionButton>
        ))}
      </ButtonGrid>
    </Container>
  );
};

export default MultiChoiceQuestion;
