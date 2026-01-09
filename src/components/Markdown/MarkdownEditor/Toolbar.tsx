import { Editor } from '@tiptap/react';

import { cn } from '@/lib/utils';

import { BoldButton } from './buttons/BoldButton';
import { BulletListButton } from './buttons/BulletListButton';
import { HeadingButton } from './buttons/HeadingButton';
import { ItalicButton } from './buttons/ItalicButton';
import { LinkButton } from './buttons/LinkButton';
import { OrderedListButton } from './buttons/OrderedListButton';
import { UnderlineButton } from './buttons/UnderlineButton';

export function Toolbar({ editor }: { editor: Editor }) {
  return (
    <div
      className={cn(
        'ikui-flex ikui-h-10 ikui-items-center ikui-gap-1 ikui-border-b ikui-bg-muted/50 ikui-px-2',
      )}
    >
      <div className="ikui-flex ikui-items-center ikui-gap-1">
        <HeadingButton editor={editor} />
        <BoldButton editor={editor} />
        <ItalicButton editor={editor} />
        <UnderlineButton editor={editor} />
      </div>

      <div className="ikui-mx-2 ikui-h-5 ikui-w-px ikui-bg-border" />
      <div className="ikui-flex ikui-items-center ikui-gap-1">
        <BulletListButton editor={editor} />
        <OrderedListButton editor={editor} />
      </div>
      <div className="ikui-mx-2 ikui-h-5 ikui-w-px ikui-bg-border" />
      <div className="ikui-flex ikui-items-center">
        <LinkButton editor={editor} />
      </div>
    </div>
  );
}
