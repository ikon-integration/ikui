import { Editor } from '@tiptap/react';

import { EditorButton } from './EditorButton';

export function UnderlineButton({ editor }: { editor: Editor }) {
  return (
    <EditorButton
      tooltip="Underline (Ctrl+U)"
      isActive={editor.isActive('underline')}
      onClick={() => editor.chain().focus().toggleUnderline().run()}
    >
      <span className="underline">U</span>
    </EditorButton>
  );
}
