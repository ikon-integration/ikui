import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { IButtonProps, Button as IKUIButton } from './Button';

function Root({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn(
        'ikui-mx-auto ikui-flex ikui-w-full ikui-justify-center',
        className,
      )}
      {...props}
    />
  );
}
Root.displayName = 'Pagination';

const Content = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        'ikui-flex ikui-flex-row ikui-items-center ikui-gap-1',
        className,
      )}
      {...props}
    />
  ),
);
Content.displayName = 'PaginationContent';

const Item = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn('ikui-', className)} {...props} />
  ),
);
Item.displayName = 'PaginationItem';

type PaginationButtonProps = {
  isActive?: boolean;
} & IButtonProps;

function Button({ isActive, size = 'icon', ...props }: PaginationButtonProps) {
  return (
    <IKUIButton
      aria-current={isActive ? 'page' : undefined}
      variant={isActive ? 'outline' : 'ghost'}
      size={size}
      {...props}
    />
  );
}
Button.displayName = 'PaginationButton';

function Previous({
  className,
  label,
  ...props
}: React.ComponentProps<typeof Button> & { label?: string }) {
  return (
    <IKUIButton
      aria-label="Go to previous page"
      size="default"
      className={cn('ikui-gap-1 ikui-pl-2.5', className)}
      variant="ghost"
      {...props}
    >
      <ChevronLeft className="ikui-h-4 ikui-w-4" />
      {label}
    </IKUIButton>
  );
}
Previous.displayName = 'PaginationPrevious';

function Next({
  className,
  label,
  ...props
}: React.ComponentProps<typeof Button> & { label?: string }) {
  return (
    <IKUIButton
      aria-label="Go to next page"
      size="default"
      className={cn('ikui-gap-1 ikui-pr-2.5', className)}
      variant="ghost"
      {...props}
    >
      {label}
      <ChevronRight className="ikui-h-4 ikui-w-4" />
    </IKUIButton>
  );
}
Next.displayName = 'PaginationNext';

function Ellipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      className={cn(
        'ikui-flex ikui-h-9 ikui-w-9 ikui-items-center ikui-justify-center',
        className,
      )}
      {...props}
    >
      <MoreHorizontal className="ikui-h-4 ikui-w-4" />
      <span className="ikui-sr-only">More pages</span>
    </span>
  );
}
Ellipsis.displayName = 'PaginationEllipsis';

export const Pagination = {
  Button,
  Content,
  Ellipsis,
  Item,
  Next,
  Previous,
  Root,
};
