import { Button } from '@/components/Button';
import { TooltipPrimitive } from '@/components/TooltipPrimitive';

interface IEditorButtonProps {
  isActive?: boolean;
  onClick: () => void;
  tooltip: string;
  children: React.ReactNode;
}

export function EditorButton({
  isActive,
  onClick,
  tooltip,
  children,
}: IEditorButtonProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={0}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <Button
            type="button"
            size="sm"
            variant={isActive ? 'default' : 'ghost'}
            onClick={onClick}
            asChild
          >
            {children}
          </Button>
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Content
          side="top"
          className="rounded bg-gray-900 px-2 py-1 text-xs text-white"
        >
          {tooltip}
          <TooltipPrimitive.Arrow className="fill-gray-900" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
