import { TooltipPrimitive } from './TooltipPrimitive';

interface ITooltipProps {
  title: React.ReactNode;
  children: React.ReactNode;
  asChild?: boolean;
  delay?: number;
  position?: 'top' | 'right' | 'bottom' | 'left';
  arrow?: boolean;
}

export function Tooltip({
  title,
  children,
  asChild = true,
  delay,
  position,
  arrow = false,
}: ITooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={delay}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild={asChild}>
          {children}
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Content side={position}>
          {title}
          {arrow && (
            <TooltipPrimitive.Arrow className="ikui-z-40 ikui-fill-popover" />
          )}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
