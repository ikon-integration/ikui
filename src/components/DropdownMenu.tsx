import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const { Root, Trigger, Group, Portal, Sub, RadioGroup } = DropdownMenuPrimitive;

const SubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
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
  </DropdownMenuPrimitive.SubTrigger>
));
SubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const SubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'ikui-z-50 ikui-min-w-[8rem] ikui-overflow-hidden ikui-rounded-md ikui-border ikui-bg-popover ikui-p-1 ikui-text-popover-foreground ikui-shadow-lg ikui-fill-mode-forwards data-[state=open]:ikui-animate-in data-[state=closed]:ikui-animate-out data-[state=closed]:ikui-fade-out-0 data-[state=open]:ikui-fade-in-0 data-[state=closed]:ikui-zoom-out-95 data-[state=open]:ikui-zoom-in-95 data-[side=bottom]:ikui-slide-in-from-top-2 data-[side=left]:ikui-slide-in-from-right-2 data-[side=right]:ikui-slide-in-from-left-2 data-[side=top]:ikui-slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
));
SubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const Content = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'ikui-z-50 ikui-min-w-[8rem] ikui-overflow-hidden ikui-rounded-md ikui-border ikui-bg-popover ikui-p-1 ikui-text-popover-foreground ikui-shadow-md ikui-fill-mode-forwards data-[state=open]:ikui-animate-in data-[state=closed]:ikui-animate-out data-[state=closed]:ikui-fade-out-0 data-[state=open]:ikui-fade-in-0 data-[state=closed]:ikui-zoom-out-95 data-[state=open]:ikui-zoom-in-95 data-[side=bottom]:ikui-slide-in-from-top-2 data-[side=left]:ikui-slide-in-from-right-2 data-[side=right]:ikui-slide-in-from-left-2 data-[side=top]:ikui-slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
Content.displayName = DropdownMenuPrimitive.Content.displayName;

const Item = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'ikui-relative ikui-flex ikui-cursor-default ikui-select-none ikui-items-center ikui-rounded-sm ikui-px-2 ikui-py-1.5 ikui-text-sm ikui-outline-none ikui-transition-colors focus:ikui-bg-accent focus:ikui-text-accent-foreground data-[disabled]:ikui-pointer-events-none data-[disabled]:ikui-opacity-50',
      inset && 'ikui-pl-8',
      className,
    )}
    {...props}
  />
));
Item.displayName = DropdownMenuPrimitive.Item.displayName;

const CheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'ikui-relative ikui-flex ikui-cursor-default ikui-select-none ikui-items-center ikui-rounded-sm ikui-py-1.5 ikui-pl-8 ikui-pr-2 ikui-text-sm ikui-outline-none ikui-transition-colors focus:ikui-bg-accent focus:ikui-text-accent-foreground data-[disabled]:ikui-pointer-events-none data-[disabled]:ikui-opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="ikui-absolute ikui-left-2 ikui-flex ikui-h-3.5 ikui-w-3.5 ikui-items-center ikui-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="ikui-h-4 ikui-w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
CheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const RadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'ikui-relative ikui-flex ikui-cursor-default ikui-select-none ikui-items-center ikui-rounded-sm ikui-py-1.5 ikui-pl-8 ikui-pr-2 ikui-text-sm ikui-outline-none ikui-transition-colors focus:ikui-bg-accent focus:ikui-text-accent-foreground data-[disabled]:ikui-pointer-events-none data-[disabled]:ikui-opacity-50',
      className,
    )}
    {...props}
  >
    <span className="ikui-absolute ikui-left-2 ikui-flex ikui-h-3.5 ikui-w-3.5 ikui-items-center ikui-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="ikui-h-2 ikui-w-2 ikui-fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
RadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const Label = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'ikui-px-2 ikui-py-1.5 ikui-text-sm ikui-font-semibold',
      inset && 'ikui-pl-8',
      className,
    )}
    {...props}
  />
));
Label.displayName = DropdownMenuPrimitive.Label.displayName;

const Separator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('ikui--mx-1 ikui-my-1 ikui-h-px ikui-bg-muted', className)}
    {...props}
  />
));
Separator.displayName = DropdownMenuPrimitive.Separator.displayName;

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

export const DropdownMenu = {
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
};
