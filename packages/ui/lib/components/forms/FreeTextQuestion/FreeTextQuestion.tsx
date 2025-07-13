import { useState, useEffect } from 'react';
import { JSX } from 'react';
import { useDebounce } from 'use-debounce';
import { FreeTextQuestionProps } from '@/components/forms/FreeTextQuestion/FreeTextQuestion.interface';
import {
  Wrapper,
  SubWrapper,
  StyledTextField,
  SectionTitle,
} from '@/components/forms/FreeTextQuestion/FreeTextQuestion.styles';
import { DEBOUNCE_DELAY_TIME } from '@/consts';

export const FreeTextQuestion = ({
  index,
  title,
  placeholder = 'הקלידו כל דבר',
  value,
  onChange,
}: FreeTextQuestionProps): JSX.Element => {
  const [inputValue, setInputValue] = useState(value);
  const [debouncedValue] = useDebounce(inputValue, DEBOUNCE_DELAY_TIME);

  useEffect(() => {
    if (debouncedValue !== value) {
      onChange(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <Wrapper>
      <SubWrapper>
        <SectionTitle>
          {index && `${index}. `}
          {title}
        </SectionTitle>
        <StyledTextField
          fullWidth
          multiline
          rows={4}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder={placeholder}
        />
      </SubWrapper>
    </Wrapper>
  );
};
