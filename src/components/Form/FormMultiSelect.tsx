import { Controller, useFormContext } from 'react-hook-form';

import { MultiSelect } from '../MultiSelect';

interface IFormMultiSelect
  extends Omit<
    React.ComponentPropsWithoutRef<typeof MultiSelect>,
    'value' | 'onChange'
  > {
  name: string;
}

export function FormMultiSelect({ name, ...props }: IFormMultiSelect) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, disabled } }) => (
        <MultiSelect
          {...props}
          onChange={onChange}
          value={value}
          disabled={props.disabled || disabled}
        />
      )}
    />
  );
}
