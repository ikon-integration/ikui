import { type DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { Dialog } from './Dialog';

const Root = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'ikui-flex ikui-h-full ikui-w-full ikui-flex-col ikui-overflow-hidden ikui-rounded-md ikui-bg-popover ikui-text-popover-foreground',
      className,
    )}
    {...props}
  />
));
Root.displayName = CommandPrimitive.displayName;

interface ICommandDialogProps extends DialogProps {}

function CommandDialog({ children, ...props }: ICommandDialogProps) {
  return (
    <Dialog.Root {...props}>
      <Dialog.Content className="ikui-overflow-hidden ikui-p-0 ikui-shadow-lg">
        <Root className="[&_[cmdk-group-heading]]:ikui-px-2 [&_[cmdk-group-heading]]:ikui-font-medium [&_[cmdk-group-heading]]:ikui-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:ikui-pt-0 [&_[cmdk-group]]:ikui-px-2 [&_[cmdk-input-wrapper]_svg]:ikui-h-5 [&_[cmdk-input-wrapper]_svg]:ikui-w-5 [&_[cmdk-input]]:ikui-h-12 [&_[cmdk-item]]:ikui-px-2 [&_[cmdk-item]]:ikui-py-3 [&_[cmdk-item]_svg]:ikui-h-5 [&_[cmdk-item]_svg]:ikui-w-5">
          {children}
        </Root>
      </Dialog.Content>
    </Dialog.Root>
  );
}

const Input = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="ikui-flex ikui-items-center ikui-border-b ikui-px-3"
    // eslint-disable-next-line react/no-unknown-property
    cmdk-input-wrapper=""
  >
    <Search className="ikui-mr-2 ikui-h-4 ikui-w-4 ikui-shrink-0 ikui-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'ikui-flex ikui-h-11 ikui-w-full ikui-rounded-md ikui-bg-transparent ikui-py-3 ikui-text-sm ikui-outline-none placeholder:ikui-text-muted-foreground disabled:ikui-cursor-not-allowed disabled:ikui-opacity-50',
        className,
      )}
      {...props}
    />
  </div>
));

Input.displayName = CommandPrimitive.Input.displayName;

const List = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      'ikui-max-h-[300px] ikui-overflow-y-auto ikui-overflow-x-hidden',
      className,
    )}
    {...props}
  />
));

List.displayName = CommandPrimitive.List.displayName;

const Empty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="ikui-py-6 ikui-text-center ikui-text-sm"
    {...props}
  />
));

Empty.displayName = CommandPrimitive.Empty.displayName;

const Group = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'ikui-overflow-hidden ikui-p-1 ikui-text-foreground [&_[cmdk-group-heading]]:ikui-px-2 [&_[cmdk-group-heading]]:ikui-py-1.5 [&_[cmdk-group-heading]]:ikui-text-xs [&_[cmdk-group-heading]]:ikui-font-medium [&_[cmdk-group-heading]]:ikui-text-muted-foreground',
      className,
    )}
    {...props}
  />
));

Group.displayName = CommandPrimitive.Group.displayName;

const Separator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('ikui--mx-1 ikui-h-px ikui-bg-border', className)}
    {...props}
  />
));
Separator.displayName = CommandPrimitive.Separator.displayName;

const Item = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'ikui-relative ikui-flex ikui-cursor-default ikui-select-none ikui-items-center ikui-rounded-sm ikui-px-2 ikui-py-1.5 ikui-text-sm ikui-outline-none aria-selected:ikui-bg-accent aria-selected:ikui-text-accent-foreground data-[disabled]:ikui-pointer-events-none data-[disabled]:ikui-opacity-50',
      className,
    )}
    {...props}
  />
));

Item.displayName = CommandPrimitive.Item.displayName;

function Shortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'ikui-ml-auto ikui-text-xs ikui-tracking-widest ikui-text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
}
Shortcut.displayName = 'CommandShortcut';

export const Command = {
  Root,
  Dialog: CommandDialog,
  Empty,
  Group,
  Input,
  Item,
  List,
  Separator,
  Shortcut,
};
