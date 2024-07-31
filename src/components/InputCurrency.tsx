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
    <div className={cn(inputVariants({ className }))}>
      {prefix && prefix !== '' && (
        <div className="text-gray-700 p-2 mr-1 rounded-tl-md rounded-bl-md bg-gray-200">
          {prefix}
        </div>
      )}
      <CurrencyInput
        {...props}
        ref={ref}
        groupSeparator={groupSeparator}
        decimalSeparator={decimalSeparator}
        decimalsLimit={decimalsLimit}
        prefix=""
        suffix=""
        className={cn(
          inputVariants({ className }),
          prefix && prefix !== '' && 'rounded-l-none',
          suffix && suffix !== '' && 'rounded-r-none',
        )}
      />
      {suffix && suffix !== '' && (
        <div
          className={`text-gray-700 ${suffix ? 'block' : 'hidden'} ml-1 p-2 rounded-tr-md rounded-br-md bg-gray-200`}
        >
          {suffix}
        </div>
      )}
    </div>
  ),
);

InputCurrency.displayName = 'InputCurrency';
