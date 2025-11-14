import * as React from 'react';
import { useEffect, useImperativeHandle } from 'react';

import { cn } from '@/lib/utils';

export interface ITextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ className, onInput, ...props }, ref) => {
    const innerRef = React.useRef<HTMLTextAreaElement | null>(null);

    useImperativeHandle(ref, () => innerRef.current!);

    useEffect(() => {
      const el = innerRef.current;
      if (!el) return;
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    }, [props.value]);

    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
      const el = innerRef.current;
      if (el) {
        el.style.height = 'auto';
        el.style.height = `${el.scrollHeight}px`;
      }

      onInput?.(e);
    };

    return (
      <textarea
        ref={innerRef}
        {...props}
        onInput={handleInput}
        className={cn(
          'overflow-hidden resize-none ikui-flex ikui-w-full ikui-rounded-md ikui-border ikui-border-input ikui-bg-background ikui-px-3 ikui-py-2 ikui-text-sm ikui-ring-offset-background ikui-transition-all placeholder:ikui-text-muted-foreground focus-visible:ikui-outline-none focus-visible:ikui-ring-2 focus-visible:ikui-ring-ring focus-visible:ikui-ring-offset-2 disabled:ikui-cursor-not-allowed disabled:ikui-opacity-50',
          className,
        )}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };
