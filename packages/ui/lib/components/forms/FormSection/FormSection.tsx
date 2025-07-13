import { FormPart } from '@/components/forms/FormPart/FormPart';
import { FormSectionProps } from '@/components/forms/FormSection/FormSection.interface';
import {
  FormPartStyling,
  HeaderText,
  IconStyle,
  SectionHeader,
  WrapperStyle,
} from '@/components/forms/FormSection/FormSection.styles';

export const FormSection: React.FC<FormSectionProps> = ({
  sectionTitle,
  formPart,
  children,
  PartIcon,
}) => (
  <WrapperStyle>
    <SectionHeader>
      <IconStyle>
        <PartIcon />
      </IconStyle>
      <HeaderText>{sectionTitle}</HeaderText>
    </SectionHeader>
    <FormPartStyling>
      {formPart ? (
        <FormPart
          title={formPart.title}
          subtitle={formPart.subtitle ?? ''}
          index={formPart.index}
        >
          {formPart.children}
        </FormPart>
      ) : (
        children
      )}
    </FormPartStyling>
  </WrapperStyle>
);
