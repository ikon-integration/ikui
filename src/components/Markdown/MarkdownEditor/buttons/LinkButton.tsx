import { LinkIcon } from '@heroicons/react/24/solid';
import { Editor } from '@tiptap/react';

import { EditorButton } from './EditorButton';

export function LinkButton({ editor }: { editor: Editor }) {
  const setLink = () => {
    if (editor.isActive('link')) {
      editor.chain().focus().unsetLink().run();
      return;
    }

    const url = window.prompt('URL');
    if (!url) return;

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <EditorButton
      tooltip="Insert link"
      isActive={editor.isActive('link')}
      onClick={setLink}
    >
      <span className="ikui-flex ikui-items-center ikui-justify-center">
        <LinkIcon className="ikui-h-4 ikui-w-4" />
      </span>
    </EditorButton>
  );
}
