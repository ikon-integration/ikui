import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';

import { SingleSelect } from '@/components/SingleSelect';

const meta = {
  title: 'Components/SingleSelect',
  component: SingleSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SingleSelect>;

export default meta;

function Template() {
  const [value, setValue] = useState<string>('');

  return (
    <div className="ikui-h-[300px] ikui-w-[700px]">
      <SingleSelect
        creatable={false}
        value={value}
        onChange={setValue}
        placeholder="Select a technology"
        options={[
          { value: 'react', label: 'React' },
          { value: 'node', label: 'Node.js' },
          { value: 'next', label: 'Nextjs' },
          { value: 'nestjs', label: 'NestJS' },
        ]}
      />
    </div>
  );
}

export const Default = Template;
