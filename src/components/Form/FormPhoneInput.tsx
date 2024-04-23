import { Controller, useFormContext } from 'react-hook-form';

import { PhoneInput } from '../PhoneInput';

interface IPhoneInputProps
  extends React.ComponentPropsWithoutRef<typeof PhoneInput> {
  name: string;
}

export function FormPhoneInput({ name, ...props }: IPhoneInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, disabled, onBlur } }) => (
        <PhoneInput
          {...props}
          name={name}
          value={value}
          onChange={onChange}
          disabled={props.disabled || disabled}
          onBlur={onBlur}
        />
      )}
    />
  );
}
