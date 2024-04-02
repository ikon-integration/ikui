import type { Meta } from '@storybook/react';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { Tabs } from '@/components/Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs.Root>;

export default meta;

function Template() {
  return (
    <Tabs.Root defaultValue="account" className="ikui-w-[400px]">
      <Tabs.List className="ikui-grid ikui-w-full ikui-grid-cols-2">
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>
              Make changes to your account here. Click save when youre done.
            </Card.Description>
          </Card.Header>
          <Card.Content className="ikui-space-y-2">
            <div className="ikui-space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Mateus Silva" />
            </div>
            <div className="ikui-space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@maateusilva" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save changes</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
      <Tabs.Content value="password">
        <Card.Root>
          <Card.Header>
            <Card.Title>Password</Card.Title>
            <Card.Description>
              Change your password here. After saving, youll be logged out.
            </Card.Description>
          </Card.Header>
          <Card.Content className="ikui-space-y-2">
            <div className="ikui-space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="ikui-space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save password</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
    </Tabs.Root>
  );
}

export const Default = Template;
