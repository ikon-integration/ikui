import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const { Root, Trigger, Portal, Close } = DialogPrimitive;

const Overlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'ikui- ikui-fixed ikui-inset-0 ikui-z-50 ikui-bg-black/80 data-[state=open]:ikui-animate-in data-[state=closed]:ikui-animate-out data-[state=closed]:ikui-fade-out-0 data-[state=open]:ikui-fade-in-0',
      className,
    )}
    {...props}
  />
));
Overlay.displayName = DialogPrimitive.Overlay.displayName;

const Content = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <Portal>
    <Overlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'ikui-fixed ikui-left-[50%] ikui-top-[50%] ikui-z-50 ikui-grid ikui-w-full ikui-max-w-lg ikui-translate-x-[-50%] ikui-translate-y-[-50%] ikui-gap-4 ikui-border ikui-bg-background ikui-p-6 ikui-shadow-lg ikui-duration-200 data-[state=open]:ikui-animate-in data-[state=closed]:ikui-animate-out data-[state=closed]:ikui-fade-out-0 data-[state=open]:ikui-fade-in-0 data-[state=closed]:ikui-zoom-out-95 data-[state=open]:ikui-zoom-in-95 data-[state=closed]:ikui-slide-out-to-left-1/2 data-[state=closed]:ikui-slide-out-to-top-[48%] data-[state=open]:ikui-slide-in-from-left-1/2 data-[state=open]:ikui-slide-in-from-top-[48%] sm:ikui-rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="ikui-absolute ikui-right-4 ikui-top-4 ikui-rounded-sm ikui-opacity-70 ikui-ring-offset-background ikui-transition-opacity hover:ikui-opacity-100 focus:ikui-outline-none focus:ikui-ring-2 focus:ikui-ring-ring focus:ikui-ring-offset-2 disabled:ikui-pointer-events-none data-[state=open]:ikui-bg-accent data-[state=open]:ikui-text-muted-foreground">
        <X className="ikui-h-4 ikui-w-4" />
        <span className="ikui-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </Portal>
));
Content.displayName = DialogPrimitive.Content.displayName;

function Header({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'ikui-flex ikui-flex-col ikui-space-y-1.5 ikui-text-center sm:ikui-text-left',
        className,
      )}
      {...props}
    />
  );
}
Header.displayName = 'DialogHeader';

function Footer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'ikui-flex ikui-flex-col-reverse sm:ikui-flex-row sm:ikui-justify-end sm:ikui-space-x-2',
        className,
      )}
      {...props}
    />
  );
}
Footer.displayName = 'DialogFooter';

const Title = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'ikui-text-lg ikui-font-semibold ikui-leading-none ikui-tracking-tight',
      className,
    )}
    {...props}
  />
));
Title.displayName = DialogPrimitive.Title.displayName;

const Description = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('ikui-text-sm ikui-text-muted-foreground', className)}
    {...props}
  />
));
Description.displayName = DialogPrimitive.Description.displayName;

export const Dialog = {
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
