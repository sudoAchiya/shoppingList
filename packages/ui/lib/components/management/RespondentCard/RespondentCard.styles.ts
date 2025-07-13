import { Box, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { managementCustomThemes } from '@/themes';

const theme = managementCustomThemes.light;

export const CardGrid = styled(Grid)`
  && {
    display: inline-flex;
    flex-flow: row nowrap;
    box-shadow: 0px 1px 7px 0px ${theme.colors.respondentCard.boxShadow};
    padding: 1rem;
    border-radius: 0.375rem;
    gap: 0.25rem;
    max-width: 100%;
  }
`;

export const RespondentImage = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  border: 2px solid ${theme.colors.respondentCard.avatarBorder};
`;

export const RespondentInfo = styled(Grid)`
  display: flex;
  flex-flow: column wrap;
`;

export const RespondentName = styled(Typography)`
  && {
    font-size: ${theme.typography.respondentCard.name.fontSize};
    font-weight: ${theme.typography.respondentCard.name.fontWeight};
    color: ${theme.typography.respondentCard.name.color};
  }
`;

export const RespondentIdentifier = styled(Typography)`
  && {
    font-size: ${theme.typography.respondentCard.identifier.fontSize};
    font-weight: ${theme.typography.respondentCard.identifier.fontWeight};
    color: ${theme.typography.respondentCard.identifier.color};
  }
`;
