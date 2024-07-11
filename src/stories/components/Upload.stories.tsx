import type { Meta, StoryObj } from '@storybook/react';

import { Upload } from '@/components/Upload';

const meta = {
  title: 'Components/Upload',
  component: Upload,
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
