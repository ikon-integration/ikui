import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Root = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'ikui-relative ikui-flex ikui-h-10 ikui-w-10 ikui-shrink-0 ikui-overflow-hidden ikui-rounded-full',
      className,
    )}
    {...props}
  />
));
Root.displayName = AvatarPrimitive.Root.displayName;

const Image = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('ikui-aspect-square ikui-h-full ikui-w-full', className)}
    {...props}
  />
));
Image.displayName = AvatarPrimitive.Image.displayName;

const Fallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'ikui-flex ikui-h-full ikui-w-full ikui-items-center ikui-justify-center ikui-rounded-full ikui-bg-muted',
      className,
    )}
    {...props}
  />
));
Fallback.displayName = AvatarPrimitive.Fallback.displayName;

export const Avatar = {
  Root,
  Image,
  Fallback,
};
