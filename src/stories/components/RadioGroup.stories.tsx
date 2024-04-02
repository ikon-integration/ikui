import type { Meta } from '@storybook/react';

import { Label } from '@/components/Label';
import { RadioGroup } from '@/components/RadioGroup';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup.Root>;

export default meta;

function Template() {
  return (
    <RadioGroup.Root defaultValue="comfortable">
      <div className="ikui-flex ikui-items-center ikui-space-x-2">
        <RadioGroup.Item value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="ikui-flex ikui-items-center ikui-space-x-2">
        <RadioGroup.Item value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="ikui-flex ikui-items-center ikui-space-x-2">
        <RadioGroup.Item value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup.Root>
  );
}

export const Default = Template;
