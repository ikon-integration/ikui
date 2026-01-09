import { Editor } from '@tiptap/react';

import { EditorButton } from './EditorButton';

export function BoldButton({ editor }: { editor: Editor }) {
  return (
    <EditorButton
      tooltip="Bold (Ctrl+B)"
      isActive={editor.isActive('bold')}
      onClick={() => editor.chain().focus().toggleBold().run()}
    >
      <strong>B</strong>
    </EditorButton>
  );
}
