import BulletList from '@tiptap/extension-bullet-list';
import Link from '@tiptap/extension-link';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { marked } from 'marked';
import TurndownService from 'turndown';

import { cn } from '@/lib/utils';

import { markdownContentClasses } from '../markdownContentClasses';

import { Toolbar } from './Toolbar';

const turndownService = new TurndownService({
  headingStyle: 'atx',
  bulletListMarker: '-',
});

turndownService.addRule('underline', {
  filter: ['u'],
  replacement: content => `_${content}_`,
});

turndownService.addRule('links', {
  filter: 'a',
  replacement: (content, node) => {
    const href = node.getAttribute('href');
    return href ? `[${content}](${href})` : content;
  },
});

interface IMarkdownEditorProps {
  value: string;
  onChange: (markdown: string) => void;
}

export function MarkdownEditor({ value, onChange }: IMarkdownEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
        listItem: false,
      }),
      ListItem,
      BulletList,
      OrderedList,
      Underline,
      Link.configure({ openOnClick: false }),
    ],
    content: marked.parse(value || ''),
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      const markdown = turndownService.turndown(html);
      onChange(markdown);
    },
    editorProps: {
      attributes: {
        class: cn(
          'ikui-focus:outline-none ikui-min-h-[150px]',
          markdownContentClasses,
        ),
      },
    },
  });
  if (!editor) return null;

  return (
    <div className="ikui-overflow-hidden ikui-rounded-md ikui-border">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className="ikui-p-4" />
    </div>
  );
}
