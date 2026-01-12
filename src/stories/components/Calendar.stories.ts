import type { Meta, StoryObj } from '@storybook/react-vite';

import { Calendar } from '@/components/Calendar';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
