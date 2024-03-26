import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox } from '../Checkbox';

interface IFormCheckbox
  extends React.ComponentPropsWithoutRef<typeof Checkbox> {
  name: string;
}

export function FormCheckbox({ name, ...props }: IFormCheckbox) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, onBlur, disabled } }) => (
        <Checkbox
          {...props}
          onCheckedChange={onChange}
          checked={value}
          onBlur={onBlur}
          disabled={disabled}
        />
      )}
    />
  );
}
