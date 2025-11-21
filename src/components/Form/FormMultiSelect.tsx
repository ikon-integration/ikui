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
      render={({ field }) => (
        <MultiSelect
          {...props}
          value={field.value ?? []}
          disabled={props.disabled || field.disabled}
          onChange={val => field.onChange([...val])}
        />
      )}
    />
  );
}
