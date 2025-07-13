import { Grid } from '@mui/material';
import styled from 'styled-components';

export const ButtonContainer = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const FormContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ComponentsContainer = styled(Grid)`
  display: flex;
  margin-top: 4rem;
  gap: 1.5rem;
`;

export const MilestoneWrapper = styled(Grid)`
  position: sticky;
  top: 4rem;
  align-self: flex-start;
  margin-left: 4rem;
  height: fit-content;
`;
