import { Controller, useFormContext } from 'react-hook-form';

import { Select2 } from '../Select2';

interface IFormSelect2 extends React.ComponentPropsWithoutRef<typeof Select2> {
  name: string;
}

export function FormSelect2({ name, ...props }: IFormSelect2) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, disabled } }) => (
        <Select2
          {...props}
          name={name}
          value={value}
          disabled={disabled}
          onValueChange={onChange}
        />
      )}
    />
  );
}
