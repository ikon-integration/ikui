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
    <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded-md border border-gray-300">
      <div
        className={`text-gray-700 ${prefix ? 'block' : 'hidden'} p-2 rounded-md bg-gray-200`}
      >
        {prefix}
      </div>
      <CurrencyInput
        {...props}
        ref={ref}
        groupSeparator={groupSeparator}
        decimalSeparator={decimalSeparator}
        decimalsLimit={decimalsLimit}
        prefix=""
        suffix=""
        className={cn(inputVariants({ className }))}
      />
      <div
        className={`text-gray-700 ${suffix ? 'block' : 'hidden'} p-2 rounded-md bg-gray-200`}
      >
        {suffix}
      </div>
    </div>
  ),
);

InputCurrency.displayName = 'InputCurrency';
