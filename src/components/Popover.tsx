import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';

import { cn } from '@/lib/utils';

const { Root, Trigger } = PopoverPrimitive;

const Content = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'ikui-z-50 ikui-w-72 ikui-rounded-md ikui-border ikui-bg-popover ikui-p-4 ikui-text-popover-foreground ikui-shadow-md ikui-outline-none data-[state=open]:ikui-animate-in data-[state=closed]:ikui-animate-out data-[state=closed]:ikui-fade-out-0 data-[state=open]:ikui-fade-in-0 data-[state=closed]:ikui-zoom-out-95 data-[state=open]:ikui-zoom-in-95 data-[side=bottom]:ikui-slide-in-from-top-2 data-[side=left]:ikui-slide-in-from-right-2 data-[side=right]:ikui-slide-in-from-left-2 data-[side=top]:ikui-slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
Content.displayName = PopoverPrimitive.Content.displayName;

export const Popover = {
  Root,
  Trigger,
  Content,
};
