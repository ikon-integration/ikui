import { Controller, useFormContext } from 'react-hook-form';

import { DatePicker } from '../DatePicker';

interface IFormDatePicker
  extends React.ComponentPropsWithoutRef<typeof DatePicker> {
  name: string;
}

export function FormDatePicker({ name, ...props }: IFormDatePicker) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, disabled } }) => (
        <DatePicker
          {...props}
          onChange={onChange}
          value={value}
          disabled={props.disabled || disabled}
        />
      )}
    />
  );
}
