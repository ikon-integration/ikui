import { Editor } from '@tiptap/react';

import { EditorButton } from './EditorButton';

export function BoldButton({
  editor,
  disabled,
}: {
  editor: Editor;
  disabled?: boolean;
}) {
  return (
    <EditorButton
      tooltip="Bold (Ctrl+B)"
      isActive={editor.isActive('bold')}
      onClick={() => editor.chain().focus().toggleBold().run()}
      disabled={disabled}
    >
      <strong>B</strong>
    </EditorButton>
  );
}
