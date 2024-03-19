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

import { Resizable } from './Resizable';
import { Separator } from './Separator';
import { Sidebar } from './Sidebar';

interface ILayoutProps {
  sidebarSize?: number;
  minSidebarSize?: number;
  sidebarCollapsedSize?: number;
  sidebarHeader?: (isCollapsed: boolean) => React.ReactNode;
  defaultCollapsed?: boolean;
  layoutStorageKey?: string;
  children?: React.ReactNode;
}

export function Layout({
  sidebarSize = 20,
  minSidebarSize = 15,
  sidebarCollapsedSize = 4,
  sidebarHeader,
  defaultCollapsed = false,
  layoutStorageKey = '@ikui:layout',
  children,
}: ILayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const contentSize = 100 - sidebarSize;

  return (
    <Resizable.PanelGroup
      autoSaveId={layoutStorageKey}
      direction="horizontal"
      className="ikui-h-full ikui-min-h-screen ikui-items-stretch"
    >
      <Resizable.Panel
        defaultSize={sidebarSize}
        maxSize={sidebarSize}
        minSize={minSidebarSize}
        collapsible
        collapsedSize={sidebarCollapsedSize}
        onCollapse={() => setIsCollapsed(true)}
        onResize={size => {
          if (size > sidebarCollapsedSize) {
            setIsCollapsed(false);
          }
        }}
        className={cn(
          isCollapsed &&
            'ikui-min-w-[50px] ikui-transition-all ikui-duration-300 ikui-ease-in-out',
        )}
      >
        {sidebarHeader && (
          <>
            <div className="px-2">{sidebarHeader(isCollapsed)}</div>
            <Separator />
          </>
        )}

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
      </Resizable.Panel>

      <Resizable.Handle withHandle />

      <Resizable.Panel defaultSize={contentSize}>
        <main>{children}</main>
      </Resizable.Panel>
    </Resizable.PanelGroup>
  );
}
