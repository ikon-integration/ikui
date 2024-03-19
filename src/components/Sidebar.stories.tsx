import type { Meta } from '@storybook/react';
import {
  AlertCircle,
  Archive,
  ArchiveX,
  FileIcon,
  Inbox,
  MessagesSquare,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from './Button';
import { Separator } from './Separator';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;

function Template() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn('ikui-w-[300px]', isCollapsed && 'ikui-w-[50px]')}>
      <Button variant="outline" onClick={() => setIsCollapsed(!isCollapsed)}>
        Toggle Collapse
      </Button>

      <Sidebar
        isCollapsed={isCollapsed}
        links={[
          {
            title: 'Inbox',
            label: '128',
            icon: Inbox,
            variant: 'default',
          },
          {
            title: 'Drafts',
            label: '9',
            icon: FileIcon,
            variant: 'ghost',
          },
          {
            title: 'Sent',
            label: '',
            icon: Send,
            variant: 'ghost',
          },
          {
            title: 'Junk',
            label: '23',
            icon: ArchiveX,
            variant: 'ghost',
          },
          {
            title: 'Trash',
            label: '',
            icon: Trash2,
            variant: 'ghost',
          },
          {
            title: 'Archive',
            label: '',
            icon: Archive,
            variant: 'ghost',
          },
        ]}
      />

      <Separator />

      <Sidebar
        isCollapsed={isCollapsed}
        links={[
          {
            title: 'Social',
            label: '972',
            icon: Users2,
            variant: 'ghost',
          },
          {
            title: 'Updates',
            label: '342',
            icon: AlertCircle,
            variant: 'ghost',
          },
          {
            title: 'Forums',
            label: '128',
            icon: MessagesSquare,
            variant: 'ghost',
          },
          {
            title: 'Shopping',
            label: '8',
            icon: ShoppingCart,
            variant: 'ghost',
          },
          {
            title: 'Promotions',
            label: '21',
            icon: Archive,
            variant: 'ghost',
          },
        ]}
      />
    </div>
  );
}

export const Default = Template;
