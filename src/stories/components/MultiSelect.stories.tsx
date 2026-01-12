import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';

import { MultiSelect } from '@/components/MultiSelect';

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
  const [value, setValue] = useState<string[]>([]);

  return (
    <div className="ikui-h-[300px] ikui-w-[700px]">
      <MultiSelect
        creatable
        value={value}
        alphabeticalSort={false}
        onChange={setValue}
        options={[
          { value: 'react', label: 'React' },
          { value: 'node', label: 'Node.js' },
          { value: 'abb', label: 'Z.js' },
          { value: 'abc', label: 'ABC.js' },
          { value: 'bca', label: 'BCA.js' },
          { value: 'ZZZ', label: 'A.js' },
          { value: 'next', label: 'Nextjs' },
          { value: 'nestjs', label: 'NestJS' },
        ]}
      />
    </div>
  );
}

export const Default = Template;
