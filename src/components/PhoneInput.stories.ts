import type { Meta, StoryObj } from '@storybook/react';

import { PhoneInput } from '@/components/PhoneInput';

const meta = {
  title: 'Components/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    value: '(999)99999999 ext. 1234',
    onChange: (value, maskedValue) => console.log({ value, maskedValue }),
  },
} satisfies Meta<typeof PhoneInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
