import { forwardRef } from 'react';
import CurrencyInput, { CurrencyInputProps } from 'react-currency-input-field';

import { cn } from '@/lib/utils';

import { inputVariants } from '..';

export const InputCurrency = forwardRef<any, CurrencyInputProps>(
  (
    {
      className,
      groupSeparator = ',',
      decimalSeparator = '.',
      decimalsLimit = 2,
      prefix = '$',
      suffix,
      ...props
    },
    ref,
  ) => (
    <CurrencyInput
      {...props}
      ref={ref}
      groupSeparator={groupSeparator}
      decimalSeparator={decimalSeparator}
      decimalsLimit={decimalsLimit}
      prefix={prefix}
      suffix={suffix}
      className={cn(
        inputVariants({ className }),
        prefix && prefix !== '' && 'rounded-l-none',
        suffix && suffix !== '' && 'rounded-r-none',
      )}
    />
  ),
);

InputCurrency.displayName = 'InputCurrency';
