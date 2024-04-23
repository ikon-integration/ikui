import { forwardRef } from 'react';

import { Input } from './Input';

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
  () => <Input />,
);
MaskedInput.displayName = 'MaskedInput';
