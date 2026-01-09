import { Editor } from '@tiptap/react';

import { EditorButton } from './EditorButton';

export function ItalicButton({ editor }: { editor: Editor }) {
  return (
    <EditorButton
      tooltip="Italic (Ctrl+I)"
      isActive={editor.isActive('italic')}
      onClick={() => editor.chain().focus().toggleItalic().run()}
    >
      <em>I</em>
    </EditorButton>
  );
}
