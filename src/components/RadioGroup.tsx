import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Root = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    className={cn('ikui-grid ikui-gap-2', className)}
    {...props}
    ref={ref}
  />
));
Root.displayName = RadioGroupPrimitive.Root.displayName;

const Item = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      'ikui-aspect-square ikui-h-4 ikui-w-4 ikui-rounded-full ikui-border ikui-border-primary ikui-text-primary ikui-ring-offset-background ikui-transition-all focus:ikui-outline-none focus-visible:ikui-ring-2 focus-visible:ikui-ring-ring focus-visible:ikui-ring-offset-2 disabled:ikui-cursor-not-allowed disabled:ikui-opacity-50',
      className,
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="ikui-flex ikui-items-center ikui-justify-center">
      <Circle className="ikui-h-2.5 ikui-w-2.5 ikui-fill-current ikui-text-current" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
Item.displayName = RadioGroupPrimitive.Item.displayName;

export const RadioGroup = {
  Root,
  Item,
};
