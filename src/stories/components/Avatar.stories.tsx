import type { Meta } from '@storybook/react';

import { Avatar } from '@/components/Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar.Root>;

export default meta;

function Template() {
  return (
    <Avatar.Root>
      <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar.Root>
  );
}

export const Default = Template;
