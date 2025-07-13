import StarterKit from '@tiptap/starter-kit';
import { marked } from 'marked';
import { RichTextEditor, type RichTextEditorRef } from 'mui-tiptap';
import { useRef } from 'react';
import {
  Container,
  EditorWrapper,
} from '@/components/forms/OpeningComponent/OpeningComponent.styles';

type OpeningComponentProps = {
  openingText: string;
};

export const OpeningComponent = ({ openingText }: OpeningComponentProps) => (
  <Container>
    <EditorWrapper>
      <RichTextEditor
        ref={useRef<RichTextEditorRef>(null)}
        content={marked.parse(openingText)}
        editable={false}
        extensions={[StarterKit]}
      />
    </EditorWrapper>
  </Container>
);
