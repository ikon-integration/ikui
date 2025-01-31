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
      'ikui-text-bold ikui-z-50 ikui-overflow-hidden ikui-rounded-lg ikui-border ikui-bg-white ikui-px-4 ikui-py-2 ikui-text-red-700 ikui-shadow-md ikui-transition-opacity ikui-duration-200 ikui-ease-in-out data-[state=closed]:ikui-opacity-0 data-[state=open]:ikui-opacity-100',
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
