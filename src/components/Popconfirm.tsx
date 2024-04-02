import { InfoIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from './Button';
import { Popover } from './Popover';

interface IPopconfirmProps {
  defaultOpen?: boolean;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => any;
  onCancel?: () => any;
  content: React.ReactNode;
  children: React.ReactNode;
  title?: string;
}

export function Popconfirm({
  content,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
  defaultOpen,
  children,
  title,
}: IPopconfirmProps) {
  const [open, setOpen] = useState(!!defaultOpen);

  async function handleOk() {
    await onConfirm?.();
    setOpen(false);
  }

  async function handleCancel() {
    await onCancel?.();
    setOpen(false);
  }

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>{children}</Popover.Trigger>

      <Popover.Content className="ikui-w-80">
        <div>
          {title && (
            <strong className="ikui-flex ikui-items-center ikui-gap-2">
              <InfoIcon className="ikui-size-4 ikui-stroke-[2.5]" />
              <strong className="ikui-font-semibold">{title}</strong>
            </strong>
          )}
          <span className="ikui-text-sm">{content}</span>
        </div>

        <div className="ikui-mt-4 ikui-flex ikui-items-center ikui-justify-end ikui-gap-2">
          <Button size="sm" variant="outline" onClick={handleCancel}>
            {cancelLabel ?? 'Cancel'}
          </Button>
          <Button size="sm" onClick={handleOk}>
            {confirmLabel ?? 'Confirm'}
          </Button>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
