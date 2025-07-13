import { colors } from '@/themes/forms/light/colors';
import type { ThemeTypography } from '@/themes/types';
import { createTypographyStyle } from '@/themes/utils';

export const FONT_WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const FONT_SIZES = {
  xxs: '0.75rem',
  xs: '0.875rem',
  sm: '0.935rem',
  base: '1rem',
  md: '1.125rem',
  lg: '1.25rem',
  xl: '1.375rem',
  button: '1.5rem',
  xxl: '1.625rem',
  xxxl: '1.875rem',
  xxxxl: '2.5rem',
};

export const typography: ThemeTypography = {
  navbar: {
    mainTitle: createTypographyStyle(
      FONT_WEIGHTS.bold,
      FONT_SIZES.lg,
      colors.header.mainTitle,
    ),
    subTitle: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.lg,
      colors.header.subTitle,
    ),
    systemNote: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.sm,
      colors.header.systemNote,
    ),
  },
  milestone: {
    notSelectedSectionTitle: createTypographyStyle(
      FONT_WEIGHTS.semibold,
      FONT_SIZES.md,
      colors.milestoneSection.notSelectedSectionTitle,
    ),
    selectedSectionTitle: createTypographyStyle(
      FONT_WEIGHTS.bold,
      FONT_SIZES.md,
      colors.milestoneSection.selectedSectionTitle,
    ),
    sectionNumber: createTypographyStyle(
      FONT_WEIGHTS.bold,
      FONT_SIZES.xl,
      colors.milestoneSection.sectionNumber,
    ),
  },
  openingText: {
    mainTitle: createTypographyStyle(
      FONT_WEIGHTS.semibold,
      FONT_SIZES.xxxxl,
      colors.openingText.mainTitle,
    ),
    timidTextTab: createTypographyStyle(
      FONT_WEIGHTS.medium,
      FONT_SIZES.base,
      colors.openingText.footerText,
    ),
    smallerTextTab: createTypographyStyle(
      FONT_WEIGHTS.medium,
      FONT_SIZES.base,
      colors.openingText.text,
    ),
    textTab: createTypographyStyle(
      FONT_WEIGHTS.medium,
      FONT_SIZES.md,
      colors.openingText.text,
    ),
    bolderTextTab: createTypographyStyle(
      FONT_WEIGHTS.bold,
      FONT_SIZES.md,
      colors.openingText.text,
    ),
  },
  sectionHeader: {
    mainTitle: createTypographyStyle(
      FONT_WEIGHTS.bold,
      FONT_SIZES.xxl,
      colors.sectionHeader.mainTitle,
    ),
  },
  mainQuestion: {
    mainTitle: createTypographyStyle(
      FONT_WEIGHTS.semibold,
      FONT_SIZES.lg,
      colors.mainQuestion.mainTitle,
    ),
    text: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.xs,
      colors.mainQuestion.text,
    ),
  },
  subQuestionNumbers: {
    index: createTypographyStyle(
      FONT_WEIGHTS.bold,
      FONT_SIZES.xxs,
      colors.subQuestionNumbers.indexColor,
    ),
    title: createTypographyStyle(
      FONT_WEIGHTS.medium,
      FONT_SIZES.base,
      colors.subQuestionNumbers.title,
    ),
    numbers: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.md,
      colors.subQuestionNumbers.numbers,
    ),
    labels: createTypographyStyle(
      FONT_WEIGHTS.semibold,
      FONT_SIZES.xxs,
      colors.subQuestionNumbers.labelsColor,
    ),
  },
  subQuestionFreeText: {
    mainTitle: createTypographyStyle(
      FONT_WEIGHTS.semibold,
      FONT_SIZES.lg,
      colors.subQuestionFreeText.title,
    ),
    subTitle: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.base,
      colors.subQuestionFreeText.subTitle,
    ),
    textBeforeAnswer: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.base,
      colors.subQuestionFreeText.textBeforeAnswer,
    ),
    textAfterAnswer: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.base,
      colors.subQuestionFreeText.textAfterAnswer,
    ),
  },
  subQuestionChoices: {
    title: createTypographyStyle(
      FONT_WEIGHTS.semibold,
      FONT_SIZES.lg,
      colors.subQuestionChoices.title,
    ),
    subTitle: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.base,
      colors.subQuestionChoices.subTitle,
    ),
    possibleAnswers: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.xs,
      colors.subQuestionChoices.possibleAnswers,
    ),
    buttonRegularText: createTypographyStyle(
      FONT_WEIGHTS.semibold,
      FONT_SIZES.base,
      colors.subQuestionChoices.buttonRegularText,
    ),
    textAfterAnswer: createTypographyStyle(
      FONT_WEIGHTS.semibold,
      FONT_SIZES.base,
      colors.subQuestionChoices.textAfterAnswer,
    ),
    button: createTypographyStyle(
      FONT_WEIGHTS.semibold,
      FONT_SIZES.button,
      colors.button.color,
    ),
  },
  surveyHeader: {
    mainTitle: createTypographyStyle(
      FONT_WEIGHTS.semibold,
      FONT_SIZES.xxxxl,
      colors.surveyHeader.mainTitle,
    ),
    subTitleBold: createTypographyStyle(
      FONT_WEIGHTS.bold,
      FONT_SIZES.xxxl,
      colors.surveyHeader.subTitle,
    ),
    subTitleSemiBold: createTypographyStyle(
      FONT_WEIGHTS.semibold,
      FONT_SIZES.xxxl,
      colors.surveyHeader.subTitle,
    ),
    subTitleRegular: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.xxxl,
      colors.surveyHeader.subTitle,
    ),
  },
  backgroundQuestionsHeader: {
    partTitle: createTypographyStyle(
      FONT_WEIGHTS.bold,
      FONT_SIZES.xxl,
      colors.backgroundQuestionsHeader.partTitle,
    ),
  },
  backgroundQuestions: {
    textTitle: createTypographyStyle(
      FONT_WEIGHTS.semibold,
      FONT_SIZES.lg,
      colors.backgroundQuestions.textTitle,
    ),
    fieldTitle: createTypographyStyle(
      FONT_WEIGHTS.medium,
      FONT_SIZES.xs,
      colors.backgroundQuestions.fieldTitle,
    ),
    fieldText: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.xs,
      colors.backgroundQuestions.fieldText,
    ),
    dropdownText: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.base,
      colors.backgroundQuestions.dropdownText,
    ),
    dropdownActiveText: createTypographyStyle(
      FONT_WEIGHTS.bold,
      FONT_SIZES.base,
      colors.backgroundQuestions.dropdownActiveText,
    ),
    menuText: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.base,
      colors.backgroundQuestions.menuText,
    ),
    menuActiveText: createTypographyStyle(
      FONT_WEIGHTS.bold,
      FONT_SIZES.base,
      colors.backgroundQuestions.menuActiveText,
    ),
    toggleSelected: createTypographyStyle(
      FONT_WEIGHTS.semibold,
      FONT_SIZES.base,
      colors.backgroundQuestions.toggleSelected,
    ),
    toggleNotSelected: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.base,
      colors.backgroundQuestions.toggleNotSelected,
    ),
  },
  footer: {
    mainText: createTypographyStyle(
      FONT_WEIGHTS.bold,
      FONT_SIZES.md,
      colors.footer.mainOrCancelText,
    ),
    cancelText: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.xs,
      colors.footer.mainOrCancelText,
    ),
    subText: createTypographyStyle(
      FONT_WEIGHTS.medium,
      FONT_SIZES.base,
      colors.footer.subText,
    ),
    confirmButtonText: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.xs,
      colors.footer.confirmButtonText,
    ),
  },
};
