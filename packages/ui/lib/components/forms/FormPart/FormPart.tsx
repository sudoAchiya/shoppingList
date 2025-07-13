import { Container, Grid } from '@mui/material';
import { FormPartProps } from '@/components/forms/FormPart/FormPart.interface';
import {
  TitelsContainer,
  FormTitle,
  FormSubtitle,
  ChildrenContainer,
  ContainerStyle,
} from '@/components/forms/FormPart/FormPart.styles';

export const FormPart: React.FC<FormPartProps> = ({
  title,
  subtitle,
  children,
  index,
}) => {
  return (
    <Container>
      <ContainerStyle>
        <TitelsContainer>
          <Grid container spacing={1} wrap="nowrap">
            {index !== null && <FormTitle>{index}.</FormTitle>}
            <Grid>
              <FormTitle>{title}</FormTitle>
              <FormSubtitle>{subtitle}</FormSubtitle>
            </Grid>
          </Grid>
        </TitelsContainer>
        <ChildrenContainer>{children}</ChildrenContainer>
      </ContainerStyle>
    </Container>
  );
};

export default FormPart;
