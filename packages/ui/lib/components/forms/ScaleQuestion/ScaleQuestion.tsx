import { Divider, Grid, Container } from '@mui/material';
import { useState } from 'react';
import type { ScaleQuestionProps } from '@/components/forms/ScaleQuestion/ScaleQuestion.interface';
import {
  IndexWithQuestion,
  DividerAndOptions,
  QuestionText,
  LabelsRow,
  ScaleButton,
  LabelItem,
  DividerContainer,
  OptionsRow,
  OptionsAndLabels,
  IndexStyling,
} from '@/components/forms/ScaleQuestion/ScaleQuestion.styles';

export const ScaleQuestion: React.FC<ScaleQuestionProps> = ({
  index,
  questionText,
  scaleOptions,
  pickedValue,
  onChange,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const handlePick = (value: number) => {
    onChange?.(value === pickedValue ? null : value);
  };
  return (
    <Container>
      <IndexWithQuestion>
        <IndexStyling>{index}</IndexStyling>
        <QuestionText>{questionText}</QuestionText>
      </IndexWithQuestion>
      <DividerAndOptions>
        <DividerContainer>
          <Divider orientation="vertical" />
        </DividerContainer>
        <OptionsAndLabels>
          <OptionsRow
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {scaleOptions.map(option => (
              <ScaleButton
                key={option.value}
                $isPicked={pickedValue === option.value}
                onClick={() => handlePick(option.value)}
              >
                {option.value}
              </ScaleButton>
            ))}
          </OptionsRow>
          <LabelsRow $isVisible={hovered}>
            <Grid container spacing={1}>
              {scaleOptions.map(option => (
                <Grid key={option.value}>
                  <LabelItem>{option.label}</LabelItem>
                </Grid>
              ))}
            </Grid>
          </LabelsRow>
        </OptionsAndLabels>
      </DividerAndOptions>
    </Container>
  );
};

export default ScaleQuestion;
