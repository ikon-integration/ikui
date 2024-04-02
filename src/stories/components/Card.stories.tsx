import type { Meta } from '@storybook/react';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Input } from '@/components/Input';
import { Label } from '@/components/Label';
import { SelectPrimitive as Select } from '@/components/SelectPrimitive';

const meta = {
  title: 'Components/Card',
  component: Card.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card.Root>;

export default meta;

function Template() {
  return (
    <Card.Root className="ikui-w-[350px]">
      <Card.Header>
        <Card.Title>Create project</Card.Title>
        <Card.Description>
          Deploy your new project in one-click.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <form>
          <div className="ikui-grid ikui-w-full ikui-items-center ikui-gap-4">
            <div className="ikui-flex ikui-flex-col ikui-space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="ikui-flex ikui-flex-col ikui-space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select.Root>
                <Select.Trigger id="framework">
                  <Select.Value placeholder="Select" />
                </Select.Trigger>
                <Select.Content position="popper">
                  <Select.Item value="next">Next.js</Select.Item>
                  <Select.Item value="sveltekit">SvelteKit</Select.Item>
                  <Select.Item value="astro">Astro</Select.Item>
                  <Select.Item value="nuxt">Nuxt.js</Select.Item>
                </Select.Content>
              </Select.Root>
            </div>
          </div>
        </form>
      </Card.Content>
      <Card.Footer className="ikui-flex ikui-justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </Card.Footer>
    </Card.Root>
  );
}

export const Default = Template;
