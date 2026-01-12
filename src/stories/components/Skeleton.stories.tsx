import type { Meta } from '@storybook/react-vite';

import { Skeleton } from '@/components/Skeleton';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;

function Template() {
  return (
    <div className="ikui-flex ikui-items-center ikui-space-x-4">
      <Skeleton className="ikui-h-12 ikui-w-12 ikui-rounded-full" />
      <div className="ikui-space-y-2">
        <Skeleton className="ikui-h-4 ikui-w-[250px]" />
        <Skeleton className="ikui-h-4 ikui-w-[200px]" />
      </div>
    </div>
  );
}

export const Default = Template;
