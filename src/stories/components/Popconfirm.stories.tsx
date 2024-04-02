import type { Meta } from '@storybook/react';

import { Button } from '@/components/Button';
import { Popconfirm } from '@/components/Popconfirm';

const meta = {
  title: 'Components/Popconfirm',
  component: Popconfirm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popconfirm>;

export default meta;

function Template() {
  return (
    <div className="ikui-flex ikui-h-[300px] ikui-w-[700px] ikui-items-center ikui-justify-center">
      <Popconfirm
        title="Delete item"
        content="Are you sure you want to delete this item?"
        onConfirm={() => alert('Confirm deletion!')}
        onCancel={() => alert('Cancel deletion!')}
      >
        <Button variant="destructive">Delete</Button>
      </Popconfirm>
    </div>
  );
}

export const Default = Template;
