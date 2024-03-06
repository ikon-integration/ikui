import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as React from 'react';

import { cn } from '@/lib/utils';

const { Root } = TabsPrimitive;

const List = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'ikui-inline-flex ikui-h-10 ikui-items-center ikui-justify-center ikui-rounded-md ikui-bg-muted ikui-p-1 ikui-text-muted-foreground',
      className,
    )}
    {...props}
  />
));
List.displayName = TabsPrimitive.List.displayName;

const Trigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'ikui-inline-flex ikui-items-center ikui-justify-center ikui-whitespace-nowrap ikui-rounded-sm ikui-px-3 ikui-py-1.5 ikui-text-sm ikui-font-medium ikui-ring-offset-background ikui-transition-all focus-visible:ikui-outline-none focus-visible:ikui-ring-2 focus-visible:ikui-ring-ring focus-visible:ikui-ring-offset-2 disabled:ikui-pointer-events-none disabled:ikui-opacity-50 data-[state=active]:ikui-bg-background data-[state=active]:ikui-text-foreground data-[state=active]:ikui-shadow-sm',
      className,
    )}
    {...props}
  />
));
Trigger.displayName = TabsPrimitive.Trigger.displayName;

const Content = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'ikui-mt-2 ikui-ring-offset-background focus-visible:ikui-outline-none focus-visible:ikui-ring-2 focus-visible:ikui-ring-ring focus-visible:ikui-ring-offset-2',
      className,
    )}
    {...props}
  />
));
Content.displayName = TabsPrimitive.Content.displayName;

export const Tabs = {
  Root,
  List,
  Trigger,
  Content,
};
