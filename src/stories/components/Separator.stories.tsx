import type { Meta } from '@storybook/react-vite';

import { Separator } from '@/components/Separator';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;

function Template() {
  return (
    <div>
      <div className="ikui-space-y-1">
        <h4 className="ikui-text-sm ikui-font-medium ikui-leading-none">
          Radix Primitives
        </h4>
        <p className="ikui-text-sm ikui-text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="ikui-my-4" />
      <div className="ikui-flex ikui-h-5 ikui-items-center ikui-space-x-4 ikui-text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}

export const Default = Template;
