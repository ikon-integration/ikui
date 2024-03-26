import type { Meta } from '@storybook/react';

import { SelectPrimitive } from './SelectPrimitive';

const meta = {
  title: 'Components/SelectPrimitive',
  component: SelectPrimitive.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectPrimitive.Root>;

export default meta;

function Template() {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="ikui-w-[180px]">
        <SelectPrimitive.Value placeholder="Select a fruit" />
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content>
        <SelectPrimitive.Group>
          <SelectPrimitive.Label>Fruits</SelectPrimitive.Label>
          <SelectPrimitive.Item value="apple">Apple</SelectPrimitive.Item>
          <SelectPrimitive.Item value="banana">Banana</SelectPrimitive.Item>
          <SelectPrimitive.Item value="blueberry">
            Blueberry
          </SelectPrimitive.Item>
          <SelectPrimitive.Item value="grapes">Grapes</SelectPrimitive.Item>
          <SelectPrimitive.Item value="pineapple">
            Pineapple
          </SelectPrimitive.Item>
        </SelectPrimitive.Group>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
}

export const Default = Template;
