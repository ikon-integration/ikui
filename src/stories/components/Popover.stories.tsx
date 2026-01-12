import type { Meta } from '@storybook/react-vite';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { Popover } from '@/components/Popover';

const meta = {
  title: 'Components/Popover',
  component: Popover.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover.Root>;

export default meta;

function Template() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Open popover</Button>
      </Popover.Trigger>
      <Popover.Content className="ikui-w-80">
        <div className="ikui-grid ikui-gap-4">
          <div className="ikui-space-y-2">
            <h4 className="ikui-font-medium ikui-leading-none">Dimensions</h4>
            <p className="ikui-text-sm ikui-text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="ikui-grid ikui-gap-2">
            <div className="ikui-grid ikui-grid-cols-3 ikui-items-center ikui-gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="ikui-col-span-2 ikui-h-8"
              />
            </div>
            <div className="ikui-grid ikui-grid-cols-3 ikui-items-center ikui-gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="ikui-col-span-2 ikui-h-8"
              />
            </div>
            <div className="ikui-grid ikui-grid-cols-3 ikui-items-center ikui-gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="ikui-col-span-2 ikui-h-8"
              />
            </div>
            <div className="ikui-grid ikui-grid-cols-3 ikui-items-center ikui-gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="ikui-col-span-2 ikui-h-8"
              />
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}

export const Default = Template;
