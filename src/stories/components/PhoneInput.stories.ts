import type { Meta, StoryObj } from '@storybook/react-vite';

import { PhoneInput } from '@/components/PhoneInput';

const meta = {
  title: 'Components/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    value: '(999)99999999',
    onChange: event => console.log({ value: event.target.value }),
  },
} satisfies Meta<typeof PhoneInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
