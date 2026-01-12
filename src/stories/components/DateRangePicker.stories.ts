import type { Meta, StoryObj } from '@storybook/react-vite';

import { DateRangePicker } from '@/components/DateRangePicker';

const meta = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    className: 'ikui-w-[300px]',
    placeholder: 'Pick a date',
    value: {
      from: new Date(2023, 6, 10),
      to: new Date(2023, 6, 28),
    },
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
