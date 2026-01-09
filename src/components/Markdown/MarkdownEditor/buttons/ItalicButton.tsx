import { Editor } from '@tiptap/react';

import { EditorButton } from './EditorButton';

export function ItalicButton({
  editor,
  disabled,
}: {
  editor: Editor;
  disabled?: boolean;
}) {
  return (
    <EditorButton
      disabled={disabled}
      tooltip="Italic (Ctrl+I)"
      isActive={editor.isActive('italic')}
      onClick={() => editor.chain().focus().toggleItalic().run()}
    >
      <em>I</em>
    </EditorButton>
  );
}
