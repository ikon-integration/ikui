import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'ikui-inline-flex ikui-items-center ikui-rounded-full ikui-border ikui-px-2.5 ikui-py-0.5 ikui-text-xs ikui-font-semibold ikui-transition-colors focus:ikui-outline-none focus:ikui-ring-2 focus:ikui-ring-ring focus:ikui-ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'ikui-border-transparent ikui-bg-primary ikui-text-primary-foreground hover:ikui-bg-primary/80',
        secondary:
          'ikui-border-transparent ikui-bg-secondary ikui-text-secondary-foreground hover:ikui-bg-secondary/80',
        destructive:
          'ikui-border-transparent ikui-bg-destructive ikui-text-destructive-foreground hover:ikui-bg-destructive/80',
        outline: 'ikui-text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface IBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: IBadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
