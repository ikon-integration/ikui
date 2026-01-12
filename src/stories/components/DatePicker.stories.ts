import type { Meta, StoryObj } from '@storybook/react-vite';

import { DatePicker } from '@/components/DatePicker';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    className: 'ikui-w-[300px]',
    placeholder: 'Pick a date',
    value: new Date(2023, 6, 10),
  },
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
