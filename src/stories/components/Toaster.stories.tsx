import type { Meta } from '@storybook/react';

import { Button } from '@/components/Button';
import { Toaster, toast } from '@/components/Toaster';

const meta = {
  title: 'Components/Toaster',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;

function Template() {
  return (
    <div className="ikui-flex ikui-h-40 ikui-items-center">
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Toast
      </Button>
    </div>
  );
}

export const Default = Template;
