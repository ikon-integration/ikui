import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'ikui-peer ikui-inline-flex ikui-h-6 ikui-w-11 ikui-shrink-0 ikui-cursor-pointer ikui-items-center ikui-rounded-full ikui-border-2 ikui-border-transparent ikui-transition-colors focus-visible:ikui-outline-none focus-visible:ikui-ring-2 focus-visible:ikui-ring-ring focus-visible:ikui-ring-offset-2 focus-visible:ikui-ring-offset-background disabled:ikui-cursor-not-allowed disabled:ikui-opacity-50 data-[state=checked]:ikui-bg-primary data-[state=unchecked]:ikui-bg-input',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'ikui-pointer-events-none ikui-block ikui-h-5 ikui-w-5 ikui-rounded-full ikui-bg-background ikui-shadow-lg ikui-ring-0 ikui-transition-transform data-[state=checked]:ikui-translate-x-5 data-[state=unchecked]:ikui-translate-x-0',
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
