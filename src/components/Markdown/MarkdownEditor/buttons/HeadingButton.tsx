import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Editor } from '@tiptap/react';

import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';

const OPTIONS = [
  { label: 'Normal', level: null },
  { label: 'Heading large', level: 1 },
  { label: 'Heading medium', level: 2 },
  { label: 'Heading small', level: 3 },
] as const;

export function HeadingButton({ editor }: { editor: Editor }) {
  const getCurrentLabel = () => {
    if (editor.isActive('heading', { level: 1 })) return 'H1';
    if (editor.isActive('heading', { level: 2 })) return 'H2';
    if (editor.isActive('heading', { level: 3 })) return 'H3';
    return 'Normal';
  };

  const setHeading = (level: 1 | 2 | 3 | null) => {
    if (level === null) {
      editor.chain().focus().setParagraph().run();
    } else {
      editor.chain().focus().toggleHeading({ level }).run();
    }
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button size="sm" variant="ghost">
          {getCurrentLabel()}
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        align="start"
        className="ikui-z-50 ikui-min-w-[180px] ikui-rounded-md ikui-border ikui-bg-white ikui-p-1 ikui-shadow-md"
      >
        {OPTIONS.map(option => {
          const isActive =
            option.level === null
              ? editor.isActive('paragraph')
              : editor.isActive('heading', { level: option.level });

          return (
            <DropdownMenu.Item
              key={option.label}
              onSelect={() => setHeading(option.level)}
              className={cn(
                'ikui-flex ikui-cursor-pointer ikui-items-center ikui-rounded ikui-px-2 ikui-py-1.5 ikui-text-sm',
                'ikui-outline-none hover:ikui-bg-muted',
                isActive && 'ikui-bg-muted ikui-font-medium',
              )}
            >
              {option.label}
            </DropdownMenu.Item>
          );
        })}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
