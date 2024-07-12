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
      className={cn(inputVariants({ className }))}
    />
  ),
);

InputCurrency.displayName = 'InputCurrency';

// import { cn } from '@/lib/utils';
// import { NumericFormat, NumericFormatProps } from 'react-number-format';

// export interface IInputCurrencyProps extends NumericFormatProps {
//   error?: boolean;
//   addonBefore?: React.ReactNode;
//   addonAfter?: React.ReactNode;
// }

// export function InputCurrency({
//   className,
//   error,
//   addonBefore = '$',
//   addonAfter,
//   ...props
// }: IInputCurrencyProps) {
//   return (
//     <div className="relative">
//       {addonBefore && (
//         <div className="font-base absolute flex h-full w-10 items-center justify-center rounded-lg text-gray-600">
//           {addonBefore}
//         </div>
//       )}

//       <NumericFormat
//         thousandSeparator=","
//         decimalSeparator="."
//         decimalScale={2}
//         className={cn(
//           'w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base text-gray-800 outline-none transition-all placeholder:text-gray-400',
//           'focus:border-primary-200 focus:ring-2 focus:ring-primary-200 focus:ring-offset-1 disabled:pointer-events-none disabled:bg-gray-100',
//           addonBefore && 'pl-9',
//           addonAfter && 'pr-9',
//           error && 'border-red-500 focus:ring-red-500',
//           className,
//         )}
//         {...props}
//       />

//       {addonAfter && (
//         <div className="font-base absolute right-0 top-0 flex h-full w-10 items-center justify-center rounded-lg text-gray-600">
//           {addonAfter}
//         </div>
//       )}
//     </div>
//   );
// }
