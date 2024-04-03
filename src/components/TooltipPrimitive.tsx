import * as RdxTooltipPrimitive from '@radix-ui/react-tooltip';
import * as React from 'react';

import { cn } from '@/lib/utils';

const { Root, Provider, Trigger, Arrow } = RdxTooltipPrimitive;

const Content = React.forwardRef<
  React.ElementRef<typeof RdxTooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof RdxTooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <RdxTooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'ikui-z-50 ikui-overflow-hidden ikui-rounded-md ikui-border ikui-bg-popover ikui-px-3 ikui-py-1.5 ikui-text-sm ikui-text-popover-foreground ikui-shadow-md ikui-animate-in ikui-fade-in-0 ikui-zoom-in-95 data-[state=closed]:ikui-animate-out data-[state=closed]:ikui-fade-out-0 data-[state=closed]:ikui-zoom-out-95 data-[side=bottom]:ikui-slide-in-from-top-2 data-[side=left]:ikui-slide-in-from-right-2 data-[side=right]:ikui-slide-in-from-left-2 data-[side=top]:ikui-slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
));
Content.displayName = RdxTooltipPrimitive.Content.displayName;

export const TooltipPrimitive = {
  Root,
  Provider,
  Trigger,
  Content,
  Arrow,
};
