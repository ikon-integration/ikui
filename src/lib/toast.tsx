import { CheckCircle2Icon, XCircleIcon } from 'lucide-react';

import { toast as IKUIToast } from '@ikonintegration/ui';

export const toast = {
  success: (title: string, message?: string) => {
    IKUIToast(
      <div>
        <div className="flex items-center gap-1">
          <CheckCircle2Icon className="size-4" />
          <span className="font-medium">{title}</span>
        </div>
        <span className="text-sm text-muted-foreground">{message}</span>
      </div>,
    );
  },
  error: (title: string, message?: string) => {
    IKUIToast(
      <div>
        <div className="flex items-center gap-1">
          <XCircleIcon className="size-4" />
          <span className="font-medium">{title}</span>
        </div>
        <span className="text-sm text-muted-foreground">{message}</span>
      </div>,
    );
  },
};
