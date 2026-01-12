import type { Meta } from '@storybook/react-vite';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { Sheet } from '@/components/Sheet';

const meta = {
  title: 'Components/Sheet',
  component: Sheet.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet.Root>;

export default meta;

function Template() {
  return (
    <Sheet.Root>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Edit profile</Sheet.Title>
          <Sheet.Description>
            Make changes to your profile here. Click save when done.
          </Sheet.Description>
        </Sheet.Header>
        <div className="ikui-grid ikui-gap-4 ikui-py-4">
          <div className="ikui-grid ikui-grid-cols-4 ikui-items-center ikui-gap-4">
            <Label htmlFor="name" className="ikui-text-right">
              Name
            </Label>
            <Input id="name" value="Mateus Silva" className="ikui-col-span-3" />
          </div>
          <div className="ikui-grid ikui-grid-cols-4 ikui-items-center ikui-gap-4">
            <Label htmlFor="username" className="ikui-text-right">
              Username
            </Label>
            <Input
              id="username"
              value="@maateusilva"
              className="ikui-col-span-3"
            />
          </div>
        </div>
        <Sheet.Footer>
          <Sheet.Close asChild>
            <Button type="submit">Save changes</Button>
          </Sheet.Close>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet.Root>
  );
}

export const Default = Template;
