import type { Meta } from '@storybook/react-vite';
import {
  CloudIcon,
  CreditCardIcon,
  GithubIcon,
  KeyboardIcon,
  LifeBuoyIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  PlusCircleIcon,
  PlusIcon,
  SettingsIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon,
} from 'lucide-react';

import { Button } from '@/components/Button';
import { DropdownMenuPrimitive } from '@/components/DropdownMenuPrimitive';

const meta = {
  title: 'Components/DropdownMenuPrimitive',
  component: DropdownMenuPrimitive.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenuPrimitive.Root>;

export default meta;

function Template() {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Content className="ikui-w-56">
        <DropdownMenuPrimitive.Label>My Account</DropdownMenuPrimitive.Label>
        <DropdownMenuPrimitive.Separator />
        <DropdownMenuPrimitive.Group>
          <DropdownMenuPrimitive.Item>
            <UserIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
            <span>Profile</span>
            <DropdownMenuPrimitive.Shortcut>⇧⌘P</DropdownMenuPrimitive.Shortcut>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item>
            <CreditCardIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
            <span>Billing</span>
            <DropdownMenuPrimitive.Shortcut>⌘B</DropdownMenuPrimitive.Shortcut>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item>
            <SettingsIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
            <span>Settings</span>
            <DropdownMenuPrimitive.Shortcut>⌘S</DropdownMenuPrimitive.Shortcut>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item>
            <KeyboardIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuPrimitive.Shortcut>⌘K</DropdownMenuPrimitive.Shortcut>
          </DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Group>
        <DropdownMenuPrimitive.Separator />
        <DropdownMenuPrimitive.Group>
          <DropdownMenuPrimitive.Item>
            <UsersIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
            <span>Team</span>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Sub>
            <DropdownMenuPrimitive.SubTrigger>
              <UserPlusIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
              <span>Invite users</span>
            </DropdownMenuPrimitive.SubTrigger>
            <DropdownMenuPrimitive.Portal>
              <DropdownMenuPrimitive.SubContent>
                <DropdownMenuPrimitive.Item>
                  <MailIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
                  <span>Email</span>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item>
                  <MessageSquareIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
                  <span>Message</span>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Separator />
                <DropdownMenuPrimitive.Item>
                  <PlusCircleIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
                  <span>More...</span>
                </DropdownMenuPrimitive.Item>
              </DropdownMenuPrimitive.SubContent>
            </DropdownMenuPrimitive.Portal>
          </DropdownMenuPrimitive.Sub>
          <DropdownMenuPrimitive.Item>
            <PlusIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
            <span>New Team</span>
            <DropdownMenuPrimitive.Shortcut>⌘+T</DropdownMenuPrimitive.Shortcut>
          </DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Group>
        <DropdownMenuPrimitive.Separator />
        <DropdownMenuPrimitive.Item>
          <GithubIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
          <span>GitHub</span>
        </DropdownMenuPrimitive.Item>
        <DropdownMenuPrimitive.Item>
          <LifeBuoyIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
          <span>Support</span>
        </DropdownMenuPrimitive.Item>
        <DropdownMenuPrimitive.Item disabled>
          <CloudIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
          <span>API</span>
        </DropdownMenuPrimitive.Item>
        <DropdownMenuPrimitive.Separator />
        <DropdownMenuPrimitive.Item>
          <LogOutIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
          <span>Log out</span>
          <DropdownMenuPrimitive.Shortcut>⇧⌘Q</DropdownMenuPrimitive.Shortcut>
        </DropdownMenuPrimitive.Item>
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Root>
  );
}

export const Default = Template;
