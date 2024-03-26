import { Controller, useFormContext } from 'react-hook-form';

import { DateRangePicker } from '../DateRangePicker';

interface IFormDateRangePicker
  extends React.ComponentPropsWithoutRef<typeof DateRangePicker> {
  name: string;
}

export function FormDateRangePicker({ name, ...props }: IFormDateRangePicker) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, disabled } }) => (
        <DateRangePicker
          {...props}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
      )}
    />
  );
}
