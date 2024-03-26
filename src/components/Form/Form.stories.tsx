import type { Meta } from '@storybook/react';
import { z } from 'zod';

import { Card } from '@/components/Card';

import { Button } from '../Button';

import { useForm } from './useForm';

import { Form } from '.';

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
    }),
    defaultValues: {
      active: true,
      unlimited: true,
      email: '',
      bio: '',
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

      <div className="ikui-flex ikui-gap-4">
        <Form.Group label="Active?">
          <Form.Checkbox name="active" />
        </Form.Group>

        <Form.Group label="Unlimited access?">
          <Form.Switch name="unlimited" />
        </Form.Group>
      </div>

      <Form.Group label="Role">
        <Form.Select2
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

      <Button>Submit</Button>
    </Form.Root>
  );
}

export const Default = Template;
