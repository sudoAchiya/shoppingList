import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import ImproveIcon from '@/assets/icons/ImproveIcon.svg?react';
import KeepIcon from '@/assets/icons/KeepIcon.svg?react';
import { KeepImproveQuestionProps } from '@/components/forms/KeepImproveQuestion/KeepImproveQuestion.interface';
import {
  ContainerStyle,
  FreeTextInput,
  QuestinosGrid,
  QuestionCard,
  QuestionLabel,
  QuestionText,
} from '@/components/forms/KeepImproveQuestion/KeepImproveQuestion.styles';
import { DEBOUNCE_DELAY_TIME } from '@/consts';

export const KeepImproveQuestion: React.FC<KeepImproveQuestionProps> = ({
  index,
  questionText,
  improvePlaceholder = 'הקלידו כל דבר',
  keepPlaceholder = 'הקלידו כל דבר',
  value,
  onChange,
}) => {
  const [keep, setKeep] = useState(value?.keep ?? null);
  const [improve, setImprove] = useState(value?.improve ?? null);

  const [debouncedKeep] = useDebounce(keep, DEBOUNCE_DELAY_TIME);
  const [debouncedImprove] = useDebounce(improve, DEBOUNCE_DELAY_TIME);

  useEffect(() => {
    if (debouncedKeep !== value?.keep || debouncedImprove !== value?.improve) {
      onChange({ keep: debouncedKeep, improve: debouncedImprove });
    }
  }, [debouncedKeep, debouncedImprove]);

  return (
    <ContainerStyle>
      <QuestionText>
        {index}. {questionText}
      </QuestionText>
      <QuestinosGrid>
        <QuestionCard>
          <QuestionLabel>
            <KeepIcon />
            <Typography>ציינו 2 נושאים לשימור</Typography>
          </QuestionLabel>
          <FreeTextInput
            placeholder={keepPlaceholder}
            value={keep}
            onChange={e => setKeep(e.target.value)}
          />
        </QuestionCard>
        <QuestionCard>
          <QuestionLabel>
            <ImproveIcon />
            <Typography>ציינו 2 נושאים לשיפור</Typography>
          </QuestionLabel>
          <FreeTextInput
            placeholder={improvePlaceholder}
            value={improve}
            onChange={e => setImprove(e.target.value)}
          />
        </QuestionCard>
      </QuestinosGrid>
    </ContainerStyle>
  );
};
