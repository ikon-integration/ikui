import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { MarkdownEditor } from '@/components/Markdown/MarkdownEditor/MarkdownEditor';
import { MarkdownRenderer } from '@/components/Markdown/MarkdownRenderer/MarkdownRenderer';

const meta = {
  title: 'Components/MarkdownEditor',
  component: MarkdownEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Markdown value',
    },
  },
} satisfies Meta<typeof MarkdownEditor>;

export default meta;

type Story = StoryObj<typeof MarkdownEditor>;

function ControlledMarkdownEditor({ value }: { value: string }) {
  const [currentValue, setValue] = useState(value);

  return (
    <div className="ikui-w-[700px]">
      <MarkdownEditor value={currentValue} onChange={setValue} />
    </div>
  );
}

export const Default: Story = {
  args: {
    value: `# Markdown Editor

This editor behaves like **react-rte**.

## Features
- Bold
- Italic
- Lists

You can write markdown and it will be rendered visually.
`,
  },
  render: args => <ControlledMarkdownEditor value={args.value || ''} />,
};

export const ReadOnly: Story = {
  args: {
    value: `# Markdown Editor

This editor behaves like **react-rte**.

## Features
- Bold
- Italic
- Lists

You can write markdown and it will be rendered visually.
`,
  },
  render: args => (
    <div className="ikui-w-[700px] ikui-rounded-md ikui-border ikui-p-4">
      <MarkdownRenderer value={args.value || ''} />
    </div>
  ),
};
