import type { Meta } from '@storybook/react-vite';
import { CalendarDaysIcon } from 'lucide-react';

import { Avatar } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { HoverCard } from '@/components/HoverCard';

const meta = {
  title: 'Components/HoverCard',
  component: HoverCard.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard.Root>;

export default meta;

function Template() {
  return (
    <div className="ikui-h-40">
      <HoverCard.Root>
        <HoverCard.Trigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCard.Trigger>

        <HoverCard.Content className="ikui-w-80">
          <div className="ikui-flex ikui-justify-between ikui-space-x-4">
            <Avatar.Root>
              <Avatar.Image src="https://github.com/vercel.png" />
              <Avatar.Fallback>VC</Avatar.Fallback>
            </Avatar.Root>
            <div className="ikui-space-y-1">
              <h4 className="ikui-text-sm ikui-font-semibold">@nextjs</h4>
              <p className="ikui-text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="ikui-flex ikui-items-center ikui-pt-2">
                <CalendarDaysIcon className="ikui-mr-2 ikui-h-4 ikui-w-4 ikui-opacity-70" />{' '}
                <span className="ikui-text-xs ikui-text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  );
}

export const Default = Template;
