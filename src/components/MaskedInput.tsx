import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

import { cn } from '@/lib/utils';

import { inputVariants } from './Input';

export interface IMaskedInputProps {
  mask: string;
  className?: string;
  value?: string;
  onChange?: (value: string, maskedValue: string) => void;
  disabled?: boolean;
  name?: string;
  onBlur?: () => void;
}

export const MaskedInput = forwardRef<HTMLInputElement, IMaskedInputProps>(
  ({ className, mask, value, onChange, disabled, name, onBlur }, ref) => (
    <IMaskInput
      mask={mask}
      inputRef={ref}
      name={name}
      value={value}
      className={cn(inputVariants({ className }))}
      unmask
      onAccept={(value, mask) => onChange?.(value, mask.masked.value)}
      disabled={disabled}
      onBlur={onBlur}
    />
  ),
);
MaskedInput.displayName = 'MaskedInput';
