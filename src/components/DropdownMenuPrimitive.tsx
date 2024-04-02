import * as RdxDropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const { Root, Trigger, Group, Portal, Sub, RadioGroup, Arrow } =
  RdxDropdownMenuPrimitive;

const SubTrigger = React.forwardRef<
  React.ElementRef<typeof RdxDropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof RdxDropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <RdxDropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'ikui-flex ikui-cursor-default ikui-select-none ikui-items-center ikui-rounded-sm ikui-px-2 ikui-py-1.5 ikui-text-sm ikui-outline-none focus:ikui-bg-accent data-[state=open]:ikui-bg-accent',
      inset && 'ikui-pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ikui-ml-auto ikui-h-4 ikui-w-4" />
  </RdxDropdownMenuPrimitive.SubTrigger>
));
SubTrigger.displayName = RdxDropdownMenuPrimitive.SubTrigger.displayName;

const SubContent = React.forwardRef<
  React.ElementRef<typeof RdxDropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof RdxDropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <RdxDropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'ikui-z-50 ikui-min-w-[8rem] ikui-overflow-hidden ikui-rounded-md ikui-border ikui-bg-popover ikui-p-1 ikui-text-popover-foreground ikui-shadow-lg ikui-fill-mode-forwards data-[state=open]:ikui-animate-in data-[state=closed]:ikui-animate-out data-[state=closed]:ikui-fade-out-0 data-[state=open]:ikui-fade-in-0 data-[state=closed]:ikui-zoom-out-95 data-[state=open]:ikui-zoom-in-95 data-[side=bottom]:ikui-slide-in-from-top-2 data-[side=left]:ikui-slide-in-from-right-2 data-[side=right]:ikui-slide-in-from-left-2 data-[side=top]:ikui-slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
));
SubContent.displayName = RdxDropdownMenuPrimitive.SubContent.displayName;

const Content = React.forwardRef<
  React.ElementRef<typeof RdxDropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof RdxDropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <RdxDropdownMenuPrimitive.Portal>
    <RdxDropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'ikui-z-50 ikui-min-w-[8rem] ikui-overflow-hidden ikui-rounded-md ikui-border ikui-bg-popover ikui-p-1 ikui-text-popover-foreground ikui-shadow-md ikui-fill-mode-forwards data-[state=open]:ikui-animate-in data-[state=closed]:ikui-animate-out data-[state=closed]:ikui-fade-out-0 data-[state=open]:ikui-fade-in-0 data-[state=closed]:ikui-zoom-out-95 data-[state=open]:ikui-zoom-in-95 data-[side=bottom]:ikui-slide-in-from-top-2 data-[side=left]:ikui-slide-in-from-right-2 data-[side=right]:ikui-slide-in-from-left-2 data-[side=top]:ikui-slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </RdxDropdownMenuPrimitive.Portal>
));
Content.displayName = RdxDropdownMenuPrimitive.Content.displayName;

const Item = React.forwardRef<
  React.ElementRef<typeof RdxDropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RdxDropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <RdxDropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'ikui-relative ikui-flex ikui-cursor-default ikui-select-none ikui-items-center ikui-rounded-sm ikui-px-2 ikui-py-1.5 ikui-text-sm ikui-outline-none ikui-transition-colors focus:ikui-bg-accent focus:ikui-text-accent-foreground data-[disabled]:ikui-pointer-events-none data-[disabled]:ikui-opacity-50',
      inset && 'ikui-pl-8',
      className,
    )}
    {...props}
  />
));
Item.displayName = RdxDropdownMenuPrimitive.Item.displayName;

const CheckboxItem = React.forwardRef<
  React.ElementRef<typeof RdxDropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof RdxDropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <RdxDropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'ikui-relative ikui-flex ikui-cursor-default ikui-select-none ikui-items-center ikui-rounded-sm ikui-py-1.5 ikui-pl-8 ikui-pr-2 ikui-text-sm ikui-outline-none ikui-transition-colors focus:ikui-bg-accent focus:ikui-text-accent-foreground data-[disabled]:ikui-pointer-events-none data-[disabled]:ikui-opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="ikui-absolute ikui-left-2 ikui-flex ikui-h-3.5 ikui-w-3.5 ikui-items-center ikui-justify-center">
      <RdxDropdownMenuPrimitive.ItemIndicator>
        <Check className="ikui-h-4 ikui-w-4" />
      </RdxDropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </RdxDropdownMenuPrimitive.CheckboxItem>
));
CheckboxItem.displayName = RdxDropdownMenuPrimitive.CheckboxItem.displayName;

const RadioItem = React.forwardRef<
  React.ElementRef<typeof RdxDropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof RdxDropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <RdxDropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'ikui-relative ikui-flex ikui-cursor-default ikui-select-none ikui-items-center ikui-rounded-sm ikui-py-1.5 ikui-pl-8 ikui-pr-2 ikui-text-sm ikui-outline-none ikui-transition-colors focus:ikui-bg-accent focus:ikui-text-accent-foreground data-[disabled]:ikui-pointer-events-none data-[disabled]:ikui-opacity-50',
      className,
    )}
    {...props}
  >
    <span className="ikui-absolute ikui-left-2 ikui-flex ikui-h-3.5 ikui-w-3.5 ikui-items-center ikui-justify-center">
      <RdxDropdownMenuPrimitive.ItemIndicator>
        <Circle className="ikui-h-2 ikui-w-2 ikui-fill-current" />
      </RdxDropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </RdxDropdownMenuPrimitive.RadioItem>
));
RadioItem.displayName = RdxDropdownMenuPrimitive.RadioItem.displayName;

const Label = React.forwardRef<
  React.ElementRef<typeof RdxDropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof RdxDropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <RdxDropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'ikui-px-2 ikui-py-1.5 ikui-text-sm ikui-font-semibold',
      inset && 'ikui-pl-8',
      className,
    )}
    {...props}
  />
));
Label.displayName = RdxDropdownMenuPrimitive.Label.displayName;

const Separator = React.forwardRef<
  React.ElementRef<typeof RdxDropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof RdxDropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <RdxDropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('ikui-mx-1 ikui-my-1 ikui-h-px ikui-bg-muted', className)}
    {...props}
  />
));
Separator.displayName = RdxDropdownMenuPrimitive.Separator.displayName;

function Shortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'ikui-ml-auto ikui-text-xs ikui-tracking-widest ikui-opacity-60',
        className,
      )}
      {...props}
    />
  );
}
Shortcut.displayName = 'Shortcut';

export const DropdownMenuPrimitive = {
  Root,
  Trigger,
  Group,
  Portal,
  Sub,
  RadioGroup,
  SubTrigger,
  SubContent,
  Content,
  Item,
  CheckboxItem,
  RadioItem,
  Label,
  Separator,
  Shortcut,
  Arrow,
};
