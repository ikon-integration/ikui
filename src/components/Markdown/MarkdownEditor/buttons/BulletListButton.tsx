import { ListBulletIcon } from '@heroicons/react/24/solid';
import { Editor } from '@tiptap/react';

import { EditorButton } from './EditorButton';

export function BulletListButton({ editor }: { editor: Editor }) {
  return (
    <EditorButton
      tooltip="Bullet list"
      isActive={editor.isActive('bulletList')}
      onClick={() => {
        editor.chain().focus().toggleBulletList().run();
      }}
    >
      <span className="ikui-flex ikui-items-center ikui-justify-center">
        <ListBulletIcon className="ikui-h-4 ikui-w-4" />
      </span>
    </EditorButton>
  );
}
