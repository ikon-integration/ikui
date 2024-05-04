import { forwardRef } from 'react';
import InputMask, { Props } from 'react-input-mask';

import { inputVariants } from './Input';

export const PhoneInput = forwardRef<
  HTMLInputElement,
  Omit<Props, 'mask' | 'inputRef'>
>(({ className, ...props }, ref) => (
  <InputMask
    {...props}
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    formatChars={{
      '9': '[0-9]',
      a: '[A-Za-z]',
      '*': '[A-Za-z0-9 .]',
    }}
    mask="+1 (999) 999-9999"
    maskChar={null}
    alwaysShowMask={false}
    className={inputVariants({ className })}
    inputRef={ref}
  />
));
PhoneInput.displayName = 'PhoneInput';
