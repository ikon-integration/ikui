import type { Meta } from '@storybook/react';

import { Select } from './Select';

const meta = {
  title: 'Components/Select',
  component: Select.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select.Root>;

export default meta;

function Template() {
  return (
    <Select.Root>
      <Select.Trigger className="ikui-w-[180px]">
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="blueberry">Blueberry</Select.Item>
          <Select.Item value="grapes">Grapes</Select.Item>
          <Select.Item value="pineapple">Pineapple</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
}

export const Default = Template;
