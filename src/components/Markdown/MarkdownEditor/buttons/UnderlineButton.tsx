import { Editor } from '@tiptap/react';

import { EditorButton } from './EditorButton';

export function UnderlineButton({
  editor,
  disabled,
}: {
  editor: Editor;
  disabled?: boolean;
}) {
  return (
    <EditorButton
      disabled={disabled}
      tooltip="Underline (Ctrl+U)"
      isActive={editor.isActive('underline')}
      onClick={() => editor.chain().focus().toggleUnderline().run()}
    >
      <span className="underline">U</span>
    </EditorButton>
  );
}
