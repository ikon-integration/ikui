import type { Meta, StoryObj } from '@storybook/react-vite';

import { SelectWithSearch } from '@/components/SelectWithSearch';

const meta = {
  title: 'Components/SelectWithSearch',
  component: SelectWithSearch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'This is my select',
    onSelect: value => console.log('Selected value:', value),
    ariaLabel: 'Select an option',
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
} satisfies Meta<typeof SelectWithSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
