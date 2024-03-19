import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as React from 'react';

import { cn } from '@/lib/utils';

const { Root, Trigger } = HoverCardPrimitive;

const Content = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      'ikui-z-50 ikui-w-64 ikui-rounded-md ikui-border ikui-bg-popover ikui-p-4 ikui-text-popover-foreground ikui-shadow-md ikui-outline-none data-[state=open]:ikui-animate-in data-[state=closed]:ikui-animate-out data-[state=closed]:ikui-fade-out-0 data-[state=open]:ikui-fade-in-0 data-[state=closed]:ikui-zoom-out-95 data-[state=open]:ikui-zoom-in-95 data-[side=bottom]:ikui-slide-in-from-top-2 data-[side=left]:ikui-slide-in-from-right-2 data-[side=right]:ikui-slide-in-from-left-2 data-[side=top]:ikui-slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
));
Content.displayName = HoverCardPrimitive.Content.displayName;

export const HoverCard = { Root, Trigger, Content };
