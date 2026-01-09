import { NumberedListIcon } from '@heroicons/react/24/solid';
import { Editor } from '@tiptap/react';

import { EditorButton } from './EditorButton';

export function OrderedListButton({
  editor,
  disabled,
}: {
  editor: Editor;
  disabled?: boolean;
}) {
  return (
    <EditorButton
      disabled={disabled}
      tooltip="Ordered list"
      isActive={editor.isActive('orderedList')}
      onClick={() => editor.chain().focus().toggleOrderedList().run()}
    >
      <span className="ikui-flex ikui-items-center ikui-justify-center">
        <NumberedListIcon className="ikui-h-4 ikui-w-4" />
      </span>
    </EditorButton>
  );
}
