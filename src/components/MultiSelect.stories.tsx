import type { Meta } from '@storybook/react';

import { MultiSelect } from '@/components/MultiSelect';

import { Input } from '..';

const meta = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MultiSelect>;

export default meta;

function Template() {
  return (
    <div className="ikui-grid ikui-h-[300px] ikui-w-[700px] ikui-grid-cols-2 ikui-gap-4">
      <MultiSelect
        creatable
        onChange={selectedOptions => console.log(selectedOptions)}
        options={[
          { value: 'react', label: 'React' },
          { value: 'node', label: 'Node.js' },
          { value: 'next', label: 'Nextjs' },
          { value: 'nestjs', label: 'NestJS' },
        ]}
      />
      <Input />
    </div>
  );
}

export const Default = Template;
