import { GripVertical } from 'lucide-react';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '@/lib/utils';

function PanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      className={cn(
        'ikui-flex ikui-h-full ikui-w-full data-[panel-group-direction=vertical]:ikui-flex-col',
        className,
      )}
      {...props}
    />
  );
}

const { Panel } = ResizablePrimitive;

function Handle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      className={cn(
        'ikui-relative ikui-flex ikui-w-px ikui-items-center ikui-justify-center ikui-bg-border after:ikui-absolute after:ikui-inset-y-0 after:ikui-left-1/2 after:ikui-w-1 after:ikui-translate-x-1/2 focus-visible:ikui-outline-none focus-visible:ikui-ring-1 focus-visible:ikui-ring-ring focus-visible:ikui-ring-offset-1 data-[panel-group-direction=vertical]:ikui-h-px data-[panel-group-direction=vertical]:ikui-w-full data-[panel-group-direction=vertical]:after:ikui-left-0 data-[panel-group-direction=vertical]:after:ikui-h-1 data-[panel-group-direction=vertical]:after:ikui-w-full data-[panel-group-direction=vertical]:after:ikui-translate-x-0 data-[panel-group-direction=vertical]:after:ikui-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:ikui-rotate-90',
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="ikui-z-10 ikui-flex ikui-h-4 ikui-w-3 ikui-items-center ikui-justify-center ikui-rounded-sm ikui-border ikui-bg-border">
          <GripVertical className="ikui-h-2.5 ikui-w-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
}

export const Resizable = { PanelGroup, Panel, Handle };
