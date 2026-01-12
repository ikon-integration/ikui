import type { Meta } from '@storybook/react-vite';

import { Button } from '@/components/Button';
import { Tooltip } from '@/components/Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;

function Template() {
  return (
    <Tooltip position="top" title="This is a Tooltip">
      <Button>Tooltip</Button>
    </Tooltip>
  );
}

export const Default = Template;
