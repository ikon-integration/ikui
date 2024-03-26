import type { Meta, StoryObj } from '@storybook/react';

import { InputCurrency } from '@/components/InputCurrency';

const meta = {
  title: 'Components/InputCurrency',
  component: InputCurrency,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputCurrency>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
