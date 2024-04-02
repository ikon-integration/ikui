import type { Meta } from '@storybook/react';
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from 'lucide-react';

import { Command } from '@/components/Command';

const meta = {
  title: 'Components/Command',
  component: Command.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Command.Root>;

export default meta;

function Template() {
  return (
    <Command.Root className="ikui-w-[350px] ikui-rounded-lg ikui-border ikui-shadow-md">
      <Command.Input placeholder="Type a command or search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Suggestions">
          <Command.Item
            value="Calendar"
            onSelect={value => console.log('Selected option:', value)}
          >
            <CalendarIcon className="ikui-mr-2 ikui-size-4" />
            <span>Calendar</span>
          </Command.Item>
          <Command.Item
            value="Search Emoji"
            onSelect={value => console.log('Selected option:', value)}
          >
            <SmileIcon className="ikui-mr-2 ikui-size-4" />
            <span>Search Emoji</span>
          </Command.Item>
          <Command.Item
            value="Calculator"
            onSelect={value => console.log('Selected option:', value)}
          >
            <CalculatorIcon className="ikui-mr-2 ikui-size-4" />
            <span>Calculator</span>
          </Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="Settings">
          <Command.Item
            value="Profile"
            onSelect={value => console.log('Selected option:', value)}
          >
            <UserIcon className="ikui-mr-2 ikui-size-4" />
            <span>Profile</span>
            <Command.Shortcut>⌘P</Command.Shortcut>
          </Command.Item>
          <Command.Item
            value="Billing"
            onSelect={value => console.log('Selected option:', value)}
          >
            <CreditCardIcon className="ikui-mr-2 ikui-size-4" />
            <span>Billing</span>
            <Command.Shortcut>⌘B</Command.Shortcut>
          </Command.Item>
          <Command.Item
            value="Settings"
            onSelect={value => console.log('Selected option:', value)}
          >
            <SettingsIcon className="ikui-mr-2 ikui-size-4" />
            <span>Settings</span>
            <Command.Shortcut>⌘S</Command.Shortcut>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Root>
  );
}

export const Default = Template;
