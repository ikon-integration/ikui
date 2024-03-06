import * as React from 'react';

import { cn } from '@/lib/utils';

const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { className?: string }
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'ikui-rounded-lg ikui-border ikui-bg-card ikui-text-card-foreground ikui-shadow-sm',
      className,
    )}
    {...props}
  />
));
Root.displayName = 'Card';

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { className?: string }
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'ikui-flex ikui-flex-col ikui-space-y-1.5 ikui-p-6',
      className,
    )}
    {...props}
  />
));
Header.displayName = 'CardHeader';

const Title = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { className?: string }
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'ikui-text-2xl ikui-font-semibold ikui-leading-none ikui-tracking-tight',
      className,
    )}
    {...props}
  />
));
Title.displayName = 'CardTitle';

const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { className?: string }
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('ikui-text-sm ikui-text-muted-foreground', className)}
    {...props}
  />
));
Description.displayName = 'CardDescription';

const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { className?: string }
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('ikui-p-6 ikui-pt-0', className)} {...props} />
));
Content.displayName = 'CardContent';

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { className?: string }
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('ikui-flex ikui-items-center ikui-p-6 ikui-pt-0', className)}
    {...props}
  />
));
Footer.displayName = 'CardFooter';

export const Card = {
  Root,
  Header,
  Title,
  Description,
  Content,
  Footer,
};
