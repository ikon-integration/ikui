import type { Meta } from '@storybook/react';

import { Button } from '@/components/Button';
import { TooltipPrimitive } from '@/components/TooltipPrimitive';

const meta = {
  title: 'Components/TooltipPrimitive',
  component: TooltipPrimitive.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TooltipPrimitive.Root>;

export default meta;

function Template() {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content>
          <p>Add to library</p>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export const Default = Template;
