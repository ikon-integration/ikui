import type { Meta, StoryObj } from '@storybook/react';

import { MaskedInput } from '@/components/MaskedInput';

const meta = {
  title: 'Components/MaskedInput',
  component: MaskedInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    mask: '(000) 000-0000 ****',
    onChange: (value, maskedValue) => console.log({ value, maskedValue }),
  },
} satisfies Meta<typeof MaskedInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
