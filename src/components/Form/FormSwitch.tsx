import { Controller, useFormContext } from 'react-hook-form';

import { Switch } from '../Switch';

interface IFormSwitch extends React.ComponentPropsWithoutRef<typeof Switch> {
  name: string;
}

export function FormSwitch({ name, ...props }: IFormSwitch) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, disabled, onBlur } }) => (
        <Switch
          {...props}
          name={name}
          onCheckedChange={onChange}
          checked={value}
          disabled={disabled}
          onBlur={onBlur}
        />
      )}
    />
  );
}
