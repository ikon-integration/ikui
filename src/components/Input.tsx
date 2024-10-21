import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

export const inputVariants = cva(
  'ikui-flex ikui-h-10 ikui-w-full ikui-rounded-md ikui-border ikui-border-input ikui-bg-background ikui-px-3 ikui-py-2 ikui-text-sm ikui-ring-offset-background ikui-transition-all file:ikui-border-0 file:ikui-bg-transparent file:ikui-text-sm file:ikui-font-medium placeholder:ikui-text-muted-foreground focus-visible:ikui-outline-none focus-visible:ikui-ring-2 focus-visible:ikui-ring-ring focus-visible:ikui-ring-offset-2 disabled:ikui-cursor-not-allowed disabled:ikui-opacity-50',
  {
    variants: {
      variant: {
        centered: 'ikui-text-center',
      },
    },
  },
);

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ className, variant, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(inputVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = 'Input';
