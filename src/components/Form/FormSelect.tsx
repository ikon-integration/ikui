import { Controller, useFormContext } from 'react-hook-form';

import { Select } from '../Select';

interface IFormSelect extends React.ComponentPropsWithoutRef<typeof Select> {
  name: string;
}

export function FormSelect({ name, ...props }: IFormSelect) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, disabled } }) => (
        <Select
          {...props}
          name={name}
          value={value}
          disabled={props.disabled || disabled}
          onValueChange={onChange}
        />
      )}
    />
  );
}
