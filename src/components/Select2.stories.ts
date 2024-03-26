import type { Meta, StoryObj } from '@storybook/react';

import { Select2 } from '@/components/Select2';

const meta = {
  title: 'Components/Select2',
  component: Select2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'This is my select',
    onValueChange: value => console.log('Selected value:', value),
    options: [
      {
        value: '1',
        label: 'Option 1',
      },
      {
        value: '2',
        label: 'Option 2',
      },
      {
        value: '3',
        label: 'Option 3',
        disabled: true,
      },
    ],
  },
} satisfies Meta<typeof Select2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
