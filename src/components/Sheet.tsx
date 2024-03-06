import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const { Root, Trigger, Close, Portal } = SheetPrimitive;

const Overlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      'ikui- ikui-fixed ikui-inset-0 ikui-z-50 ikui-bg-black/80 data-[state=open]:ikui-animate-in data-[state=closed]:ikui-animate-out data-[state=closed]:ikui-fade-out-0 data-[state=open]:ikui-fade-in-0',
      className,
    )}
    {...props}
    ref={ref}
  />
));
Overlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  'ikui-fixed ikui-z-50 ikui-gap-4 ikui-bg-background ikui-p-6 ikui-shadow-lg ikui-transition ikui-ease-in-out data-[state=open]:ikui-animate-in data-[state=closed]:ikui-animate-out data-[state=closed]:ikui-duration-300 data-[state=open]:ikui-duration-500',
  {
    variants: {
      side: {
        top: 'ikui-inset-x-0 ikui-top-0 ikui-border-b data-[state=closed]:ikui-slide-out-to-top data-[state=open]:ikui-slide-in-from-top',
        bottom:
          'ikui-inset-x-0 ikui-bottom-0 ikui-border-t data-[state=closed]:ikui-slide-out-to-bottom data-[state=open]:ikui-slide-in-from-bottom',
        left: 'ikui-inset-y-0 ikui-left-0 ikui-h-full ikui-w-3/4 ikui-border-r data-[state=closed]:ikui-slide-out-to-left data-[state=open]:ikui-slide-in-from-left sm:ikui-max-w-sm',
        right:
          'ikui-inset-y-0 ikui-right-0 ikui-h-full ikui-w-3/4 ikui- ikui-border-l data-[state=closed]:ikui-slide-out-to-right data-[state=open]:ikui-slide-in-from-right sm:ikui-max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
);

interface ISheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const Content = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  ISheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <Portal>
    <Overlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="ikui-absolute ikui-right-4 ikui-top-4 ikui-rounded-sm ikui-opacity-70 ikui-ring-offset-background ikui-transition-opacity hover:ikui-opacity-100 focus:ikui-outline-none focus:ikui-ring-2 focus:ikui-ring-ring focus:ikui-ring-offset-2 disabled:ikui-pointer-events-none data-[state=open]:ikui-bg-secondary">
        <X className="ikui-h-4 ikui-w-4" />
        <span className="ikui-sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </Portal>
));
Content.displayName = SheetPrimitive.Content.displayName;

function Header({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { className?: string }) {
  return (
    <div
      className={cn(
        'ikui-flex ikui-flex-col ikui-space-y-2 ikui-text-center sm:ikui-text-left',
        className,
      )}
      {...props}
    />
  );
}
Header.displayName = 'SheetHeader';

function Footer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { className?: string }) {
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
Footer.displayName = 'SheetFooter';

const Title = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn(
      'ikui-text-lg ikui-font-semibold ikui-text-foreground',
      className,
    )}
    {...props}
  />
));
Title.displayName = SheetPrimitive.Title.displayName;

const Description = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> & {
    className?: string;
  }
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn('ikui-text-sm ikui-text-muted-foreground', className)}
    {...props}
  />
));
Description.displayName = SheetPrimitive.Description.displayName;

export const Sheet = {
  Root,
  Close,
  Content,
  Description,
  Footer,
  Header,
  Overlay,
  Portal,
  Title,
  Trigger,
};
