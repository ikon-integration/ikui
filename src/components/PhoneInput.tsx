import { forwardRef } from 'react';

import { IMaskedInputProps, MaskedInput } from './MaskedInput';

export const PhoneInput = forwardRef<
  HTMLInputElement,
  Omit<IMaskedInputProps, 'mask'>
>((props, ref) => (
  <MaskedInput mask="+1 (000) 000-0000[ **********]" ref={ref} {...props} />
));
PhoneInput.displayName = 'PhoneInput';
