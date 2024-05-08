import * as React from 'react';

import { cn } from '@/lib/utils';

const Root = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="ikui-relative ikui-w-full ikui-overflow-auto">
    <table
      ref={ref}
      className={cn('ikui-w-full ikui-caption-bottom ikui-text-sm', className)}
      {...props}
    />
  </div>
));
Root.displayName = 'TableRoot';

const Header = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn('[&_tr]:ikui-border-b', className)}
    {...props}
  />
));
Header.displayName = 'TableHeader';

const Body = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn('[&_tr:last-child]:ikui-border-0', className)}
    {...props}
  />
));
Body.displayName = 'TableBody';

const Footer = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'ikui-border-t ikui-bg-muted/50 ikui-font-medium [&>tr]:last:ikui-border-b-0',
      className,
    )}
    {...props}
  />
));
Footer.displayName = 'TableFooter';

const Row = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'ikui-border-b ikui-transition-colors hover:ikui-bg-muted/50 data-[state=selected]:ikui-bg-muted',
      className,
    )}
    {...props}
  />
));
Row.displayName = 'TableRow';

const Head = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'ikui-h-12 ikui-px-4 ikui-text-left ikui-align-middle ikui-font-medium ikui-text-muted-foreground [&:has([role=checkbox])]:ikui-pr-0',
      className,
    )}
    {...props}
  />
));
Head.displayName = 'TableHead';

const Cell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'ikui-p-3 ikui-pl-6 ikui-align-middle [&:has([role=checkbox])]:ikui-pr-0',
      className,
    )}
    {...props}
  />
));
Cell.displayName = 'TableCell';

const Caption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(
      'ikui-mt-4 ikui-text-sm ikui-text-muted-foreground',
      className,
    )}
    {...props}
  />
));
Caption.displayName = 'TableCaption';

export const Table = {
  Root,
  Header,
  Body,
  Footer,
  Row,
  Head,
  Cell,
  Caption,
};
