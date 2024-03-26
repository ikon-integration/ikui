import { forwardRef } from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

import { cn } from '@/lib/utils';

import { inputVariants } from '..';

export const InputCurrency = forwardRef<any, NumericFormatProps>(
  (
    {
      className,
      thousandSeparator = ',',
      decimalSeparator = '.',
      decimalScale = 2,
      ...props
    },
    ref,
  ) => (
    <NumericFormat
      {...props}
      getInputRef={ref}
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      decimalScale={decimalScale}
      className={cn(inputVariants({ className }))}
    />
  ),
);
InputCurrency.displayName = 'InputCurrency';
