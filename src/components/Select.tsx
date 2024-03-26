import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const { Root, Group, Value } = SelectPrimitive;

const Trigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'ikui-flex ikui-h-10 ikui-w-full ikui-items-center ikui-justify-between ikui-rounded-md ikui-border ikui-border-input ikui-bg-background ikui-px-3 ikui-py-2 ikui-text-sm ikui-ring-offset-background ikui-transition-all placeholder:ikui-text-muted-foreground focus:ikui-outline-none focus:ikui-ring-2 focus:ikui-ring-ring focus:ikui-ring-offset-2 disabled:ikui-cursor-not-allowed disabled:ikui-opacity-50 [&>span]:ikui-line-clamp-1',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="ikui-ml-2 ikui-h-4 ikui-w-4 ikui-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
Trigger.displayName = SelectPrimitive.Trigger.displayName;

const ScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      'ikui-flex ikui-cursor-default ikui-items-center ikui-justify-center ikui-py-1',
      className,
    )}
    {...props}
  >
    <ChevronUp className="ikui-h-4 ikui-w-4" />
  </SelectPrimitive.ScrollUpButton>
));
ScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const ScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      'ikui-flex ikui-cursor-default ikui-items-center ikui-justify-center ikui-py-1',
      className,
    )}
    {...props}
  >
    <ChevronDown className="ikui-h-4 ikui-w-4" />
  </SelectPrimitive.ScrollDownButton>
));
ScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const Content = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'ikui-relative ikui-z-50 ikui-max-h-96 ikui-min-w-[8rem] ikui-overflow-hidden ikui-rounded-md ikui-border ikui-bg-popover ikui-text-popover-foreground ikui-shadow-md data-[state=open]:ikui-animate-in data-[state=closed]:ikui-animate-out data-[state=closed]:ikui-fade-out-0 data-[state=open]:ikui-fade-in-0 data-[state=closed]:ikui-zoom-out-95 data-[state=open]:ikui-zoom-in-95 data-[side=bottom]:ikui-slide-in-from-top-2 data-[side=left]:ikui-slide-in-from-right-2 data-[side=right]:ikui-slide-in-from-left-2 data-[side=top]:ikui-slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:ikui-translate-y-1 data-[side=left]:ikui-translate-x-1 data-[side=right]:ikui-translate-x-1 data-[side=top]:ikui-translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <ScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'ikui-p-1',
          position === 'popper' &&
            'ikui-h-[var(--radix-select-trigger-height)] ikui-w-full ikui-min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <ScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
Content.displayName = SelectPrimitive.Content.displayName;

const Label = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(
      'ikui-py-1.5 ikui-pl-8 ikui-pr-2 ikui-text-sm ikui-font-semibold',
      className,
    )}
    {...props}
  />
));
Label.displayName = SelectPrimitive.Label.displayName;

const Item = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'ikui-relative ikui-flex ikui-w-full ikui-cursor-default ikui-select-none ikui-items-center ikui-rounded-sm ikui-py-1.5 ikui-pl-8 ikui-pr-2 ikui-text-sm ikui-outline-none focus:ikui-bg-accent focus:ikui-text-accent-foreground data-[disabled]:ikui-pointer-events-none data-[disabled]:ikui-opacity-50',
      className,
    )}
    {...props}
  >
    <span className="ikui-absolute ikui-left-2 ikui-flex ikui-h-3.5 ikui-w-3.5 ikui-items-center ikui-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="ikui-h-4 ikui-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
Item.displayName = SelectPrimitive.Item.displayName;

const Separator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('ikui-mx-1 ikui-my-1 ikui-h-px ikui-bg-muted', className)}
    {...props}
  />
));
Separator.displayName = SelectPrimitive.Separator.displayName;

export const Select = {
  Root,
  Content,
  Group,
  Item,
  Label,
  ScrollDownButton,
  ScrollUpButton,
  Separator,
  Trigger,
  Value,
};
