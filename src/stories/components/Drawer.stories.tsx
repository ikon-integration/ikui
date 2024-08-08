import type { Meta } from '@storybook/react';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/Button';
import { Drawer } from '@/components/Drawer';

const meta = {
  title: 'Components/Drawer',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer.Root>;

export default meta;

function Template() {
  const [goal, setGoal] = useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content direction="right">
        <div className="ikui-mx-auto ikui-w-full ikui-max-w-sm">
          <Drawer.Header>
            <Drawer.Title>Move Goal</Drawer.Title>
            <Drawer.Description>
              Set your daily activity goal.
            </Drawer.Description>
          </Drawer.Header>
          <div className="ikui-p-4 ikui-pb-0">
            <div className="ikui-flex ikui-items-center ikui-justify-center ikui-space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="ikui-h-8 ikui-w-8 ikui-shrink-0 ikui-rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <MinusIcon className="ikui-h-4 ikui-w-4" />
                <span className="ikui-sr-only">Decrease</span>
              </Button>
              <div className="ikui-flex-1 ikui-text-center">
                <div className="ikui-text-7xl ikui-font-bold ikui-tracking-tighter">
                  {goal}
                </div>
                <div className="ikui-text-[0.70rem] ikui-uppercase ikui-text-muted-foreground">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="ikui-h-8 ikui-w-8 ikui-shrink-0 ikui-rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <PlusIcon className="ikui-h-4 ikui-w-4" />
                <span className="ikui-sr-only">Increase</span>
              </Button>
            </div>
          </div>
          <Drawer.Footer>
            <Button>Submit</Button>
            <Drawer.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.Close>
          </Drawer.Footer>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
}

export const Default = Template;
