import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'ikui-animate-pulse ikui-rounded-md ikui-bg-muted',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
