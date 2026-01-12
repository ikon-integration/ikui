import type { Meta } from '@storybook/react-vite';
import { ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/Button';
import { Collapsible } from '@/components/Collapsible';

const meta = {
  title: 'Components/Collapsible',
  component: Collapsible.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible.Root>;

export default meta;

function Template() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      className="ikui-w-[350px] ikui-space-y-2"
    >
      <div className="ikui-flex ikui-items-center ikui-justify-between ikui-space-x-4 ikui-px-4">
        <h4 className="ikui-text-sm ikui-font-semibold">
          @maateusilva starred 3 repositories
        </h4>
        <Collapsible.Trigger asChild>
          <Button variant="ghost" size="sm" className="ikui-w-9 ikui-p-0">
            <ChevronsUpDown className="ikui-h-4 ikui-w-4" />
            <span className="ikui-sr-only">Toggle</span>
          </Button>
        </Collapsible.Trigger>
      </div>
      <div className="ikui-flex ikui-h-12 ikui-items-center ikui-rounded-md ikui-border ikui-px-4 ikui-font-mono ikui-text-sm">
        @radix-ui/primitives
      </div>
      <Collapsible.Content className="ikui-space-y-2">
        <div className="ikui-items-centerfont-mono ikui-flex ikui-h-12 ikui-items-center ikui-rounded-md ikui-border ikui-px-4 ikui-text-sm">
          @radix-ui/colors
        </div>
        <div className="ikui-flex ikui-h-12 ikui-items-center ikui-rounded-md ikui-border ikui-px-4 ikui-font-mono ikui-text-sm">
          @stitches/react
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

export const Default = Template;
