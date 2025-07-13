import { Grid } from '@mui/material';
import styled from 'styled-components';
import { formsCustomThemes } from '@/themes/forms';

const theme = formsCustomThemes.light;

export const Container = styled(Grid)`
  padding: 2rem;
  max-width: 48.75rem;
  border-radius: 1.125rem;
  background-color: ${theme.colors.openingText.background};
  box-shadow: 0 0.125rem 0.625rem ${theme.colors.openingText.boxShadow};
`;

export const EditorWrapper = styled(Grid)`
  && {
    color: ${theme.typography.openingText.textTab.color};
    line-height: 1.5;
    .MuiTiptap-FieldContainer-notchedOutline {
      display: none;
    }

    .MuiTiptap-RichTextField-content {
      padding: 0;
    }

    .ProseMirror {
      p {
        margin: 1rem 0;
      }

      font-weight: ${theme.typography.openingText.textTab.fontWeight};
      font-size: ${theme.typography.openingText.textTab.fontSize};

      strong {
        font-weight: ${theme.typography.openingText.bolderTextTab.fontWeight};
        font-size: ${theme.typography.openingText.bolderTextTab.fontSize};
      }

      h3 {
        font-weight: ${theme.typography.openingText.smallerTextTab.fontWeight};
        font-size: ${theme.typography.openingText.smallerTextTab.fontSize};
      }

      h4 {
        font-weight: ${theme.typography.openingText.timidTextTab.fontWeight};
        font-size: ${theme.typography.openingText.timidTextTab.fontSize};
        color: ${theme.typography.openingText.timidTextTab.color};
      }
    }
  }
`;
