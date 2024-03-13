import * as React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';

import { cn } from '@/lib/utils';

const { Trigger, Portal, Close } = DrawerPrimitive;

function Root({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root> & {
  shouldScaleBackground?: boolean;
}) {
  return (
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
  );
}
Root.displayName = 'Drawer';

const Overlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn(
      'ikui-fixed ikui-inset-0 ikui-z-50 ikui-bg-black/80',
      className,
    )}
    {...props}
  />
));
Overlay.displayName = DrawerPrimitive.Overlay.displayName;

const Content = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <Portal>
    <Overlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        'ikui-fixed ikui-inset-x-0 ikui-bottom-0 ikui-z-50 ikui-mt-24 ikui-flex ikui-h-auto ikui-flex-col ikui-rounded-t-[10px] ikui-border ikui-bg-background',
        className,
      )}
      {...props}
    >
      <div className="ikui-mx-auto ikui-mt-4 ikui-h-2 ikui-w-[100px] ikui-rounded-full ikui-bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </Portal>
));
Content.displayName = 'DrawerContent';

function Header({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'ikui-grid ikui-gap-1.5 ikui-p-4 ikui-text-center sm:ikui-text-left',
        className,
      )}
      {...props}
    />
  );
}
Header.displayName = 'DrawerHeader';

function Footer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'ikui-mt-auto ikui-flex ikui-flex-col ikui-gap-2 ikui-p-4',
        className,
      )}
      {...props}
    />
  );
}
Footer.displayName = 'DrawerFooter';

const Title = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      'ikui-text-lg ikui-font-semibold ikui-leading-none ikui-tracking-tight',
      className,
    )}
    {...props}
  />
));
Title.displayName = DrawerPrimitive.Title.displayName;

const Description = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn('ikui-text-sm ikui-text-muted-foreground', className)}
    {...props}
  />
));
Description.displayName = DrawerPrimitive.Description.displayName;

export const Drawer = {
  Root,
  Trigger,
  Portal,
  Close,
  Overlay,
  Content,
  Header,
  Footer,
  Title,
  Description,
};
