import { forwardRef } from 'react';
import InputMask, { Props } from 'react-input-mask';

import { inputVariants } from './Input';

const cleanValue = (value: string) => value; // .replace(/[^\d]/g, '');

export const PhoneInput = forwardRef<
  HTMLInputElement,
  Omit<Props, 'mask' | 'inputRef'>
>(({ className, onChange, ...props }, ref) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedValue = cleanValue(event.target.value);
    if (onChange) {
      onChange({ ...event, target: { ...event.target, value: cleanedValue } });
    }
  };
  return (
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
      maskChar=""
      alwaysShowMask={false}
      className={inputVariants({ className })}
      inputRef={ref}
      onChange={handleChange}
    />
  );
});
PhoneInput.displayName = 'PhoneInput';
