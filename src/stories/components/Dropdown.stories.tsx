/* eslint-disable no-alert */
import type { Meta, StoryObj } from '@storybook/react';
import { FolderArchiveIcon, ScanFaceIcon } from 'lucide-react';

import { Button } from '@/components/Button';
import { Dropdown } from '@/components/Dropdown';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: <Button>Open dropdown</Button>,
    className: 'ikui-w-[200px]',
    items: [
      {
        key: 'item-1',
        label: 'Simple item',
        onSelect() {
          alert('Selected');
        },
      },
      {
        key: 'item-2',
        label: <span>With JSX</span>,
      },
      { key: 'item-3', label: 'Disabled', disabled: true },
      { type: 'divider' },
      {
        key: 'item-4',
        label: 'Left Icon',
        iconLeft: ScanFaceIcon,
      },
      {
        key: 'item-5',
        label: 'Right Icon',
        iconRight: ScanFaceIcon,
      },
      {
        key: 'item-6',
        label: 'Both Icons',
        iconLeft: ScanFaceIcon,
        iconRight: FolderArchiveIcon,
      },
      { type: 'divider' },
      {
        key: 'item-7',
        label: 'With submenu',
        submenu: [
          { key: 'item-1', label: 'Simple item' },
          { type: 'divider' },
          {
            key: 'item-2',
            label: <span>With JSX</span>,
          },
          { key: 'item-3', label: 'Disabled', disabled: true },
          {
            key: 'item-4',
            label: 'Left Icon',
            iconLeft: ScanFaceIcon,
          },
        ],
      },
    ],
  },
};
