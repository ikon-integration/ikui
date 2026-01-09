import type { Meta } from '@storybook/react';
import { z } from 'zod';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Form, useForm } from '@/components/Form';
import { Label } from '@/components/Label';
import { RadioGroup } from '@/components/RadioGroup';

const meta = {
  title: 'Components/Form',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card.Root>;

export default meta;

function Template() {
  const form = useForm({
    schema: z.object({
      active: z.boolean(),
      unlimited: z.boolean(),
      email: z.string().min(1).email(),
      role: z.enum(['ADMIN', 'EDITOR', 'READONLY']),
      bio: z.string().min(1),
      salary: z.any(),
      joiningDate: z.date(),
      dateRange: z.object({
        from: z.date({ error: 'Select a From date' }),
        to: z.date({ error: 'Select a To date' }),
      }),
      tags: z.array(z.string()).min(1, 'At least 1 tag'),
      phone: z.string(),
      radioValue: z.string(),
    }),
    defaultValues: {
      active: true,
      unlimited: true,
      email: '',
      bio: '## Example Bio\nThis is an example of a **Markdown** bio.\n- Item 1\n- Item 2\n- Item 3\n\n### More Information\nYou can include links like [this](https://example.com) or images like ![alt text](https://example.com/image.png).',
      phone: '',
      dateRange: {
        from: new Date(2023, 10, 10),
        to: new Date(2023, 10, 25),
      },
      tags: ['react', 'nestjs'],
      radioValue: '',
    },
  });

  return (
    <Form.Root
      form={form}
      onSubmit={data => console.log(data)}
      className="ikui-w-[300px] ikui-space-y-4"
    >
      <Form.Group label="Email" description="Your best email">
        <Form.Input name="email" />
      </Form.Group>

      <Form.Group label="Phone">
        <Form.PhoneInput name="phone" />
      </Form.Group>

      <Form.Group label="Radio value">
        <Form.RadioGroup name="radioValue">
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
        </Form.RadioGroup>
      </Form.Group>

      <div className="ikui-flex ikui-gap-4">
        <Form.Group label="Active?">
          <Form.Checkbox name="active" />
        </Form.Group>

        <Form.Group label="Unlimited access?">
          <Form.Switch name="unlimited" />
        </Form.Group>
      </div>

      <Form.Group label="Role">
        <Form.Select
          name="role"
          placeholder="Select a role..."
          options={[
            { value: 'ADMIN', label: 'Administrator' },
            { value: 'EDITOR', label: 'Editor' },
            { value: 'READONLY', label: 'Read-only' },
          ]}
        />
      </Form.Group>

      <Form.Group label="Bio" description="Tell us more about this guy...">
        <Form.TextArea name="bio" />
      </Form.Group>

      <Form.Group label="Salary">
        <Form.InputCurrency name="salary" />
      </Form.Group>

      <Form.Group label="Joining Date">
        <Form.DatePicker name="joiningDate" placeholder="Pick a date" />
      </Form.Group>

      <Form.Group label="Range Picker">
        <Form.DateRangePicker name="dateRange" placeholder="Pick a range" />
      </Form.Group>

      <Form.Group label="Tags">
        <Form.MultiSelect
          name="tags"
          placeholder="Select the tags..."
          creatable
          options={[
            { value: 'react', label: 'React' },
            { value: 'node', label: 'Node.js' },
            { value: 'next', label: 'Nextjs' },
            { value: 'nestjs', label: 'NestJS' },
          ]}
        />
      </Form.Group>
      <Form.Group label="Bio" description="Tell us more about this guy...">
        <Form.Markdown name="bio" />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form.Root>
  );
}

export const Default = Template;
