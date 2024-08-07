import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2Icon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'ikui-inline-flex ikui-items-center ikui-justify-center ikui-whitespace-nowrap ikui-rounded-md ikui-text-sm ikui-font-medium ikui-ring-offset-background ikui-transition-all focus-visible:ikui-outline-none focus-visible:ikui-ring-2 focus-visible:ikui-ring-ring focus-visible:ikui-ring-offset-2 disabled:ikui-pointer-events-none disabled:ikui-opacity-50 ikui-relative',
  {
    variants: {
      variant: {
        default:
          'ikui-bg-primary ikui-text-primary-foreground hover:ikui-bg-primary/90',
        destructive:
          'ikui-bg-destructive ikui-text-destructive-foreground hover:ikui-bg-destructive/90',
        outline:
          'ikui-border ikui-border-input ikui-bg-background hover:ikui-bg-accent hover:ikui-text-accent-foreground',
        secondary:
          'ikui-bg-secondary ikui-text-secondary-foreground hover:ikui-bg-secondary/80',
        ghost: 'hover:ikui-bg-accent hover:ikui-text-accent-foreground',
        link: 'ikui-text-primary ikui-underline-offset-4 hover:ikui-underline',
      },
      size: {
        default: 'ikui-h-10 ikui-px-4 ikui-py-2',
        sm: 'ikui-h-9 ikui-rounded-md ikui-px-3',
        lg: 'ikui-h-11 ikui-rounded-md ikui-px-8',
        icon: 'ikui-h-10 ikui-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading,
      children,
      disabled,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        type={type}
        {...props}
      >
        {loading && (
          <Loader2Icon
            className={cn(
              'ikui-size-4 ikui-animate-spin',
              children && 'ikui-mr-2',
            )}
          />
        )}

        <Slottable>{children}</Slottable>
      </Comp>
    );
  },
);
Button.displayName = 'Button';
