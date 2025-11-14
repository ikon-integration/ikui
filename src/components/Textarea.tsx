import * as React from 'react';
import { useEffect, useImperativeHandle } from 'react';

import { cn } from '@/lib/utils';

export interface ITextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ className, ...props }, ref) => {
    const innerRef = React.useRef<HTMLTextAreaElement | null>(null);

    useImperativeHandle(ref, () => innerRef.current!);

    const autoResize = () => {
      const el = innerRef.current;
      if (!el) return;
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    };

    useEffect(() => {
      autoResize();
    }, [props.value]);
    return (
      <textarea
        ref={innerRef}
        onInput={e => {
          autoResize();
          props.onInput?.(e);
        }}
        className={cn(
          'overflow-hidden resize-none ikui-flex ikui-w-full ikui-rounded-md ikui-border ikui-border-input ikui-bg-background ikui-px-3 ikui-py-2 ikui-text-sm ikui-ring-offset-background ikui-transition-all placeholder:ikui-text-muted-foreground focus-visible:ikui-outline-none focus-visible:ikui-ring-2 focus-visible:ikui-ring-ring focus-visible:ikui-ring-offset-2 disabled:ikui-cursor-not-allowed disabled:ikui-opacity-50',
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };
