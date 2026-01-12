import type { Meta } from '@storybook/react-vite';

import { Button } from '@/components/Button';
import { Dialog } from '@/components/Dialog';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';

const meta = {
  title: 'Components/Dialog',
  component: Dialog.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog.Root>;

export default meta;

function Template() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </Dialog.Trigger>
      <Dialog.Content className="sm:ikui-max-w-[425px]">
        <Dialog.Header>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when done.
          </Dialog.Description>
        </Dialog.Header>
        <div className="ikui-grid ikui-gap-4 ikui-py-4">
          <div className="ikui-grid ikui-grid-cols-4 ikui-items-center ikui-gap-4">
            <Label htmlFor="name" className="ikui-text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Mateus Silva"
              className="ikui-col-span-3"
            />
          </div>
          <div className="ikui-grid ikui-grid-cols-4 ikui-items-center ikui-gap-4">
            <Label htmlFor="username" className="ikui-text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@maateusilva"
              className="ikui-col-span-3"
            />
          </div>
        </div>
        <Dialog.Footer>
          <Button type="submit">Save changes</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export const Default = Template;
