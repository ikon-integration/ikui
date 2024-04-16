import { Controller, useFormContext } from 'react-hook-form';

import { RadioGroup } from '../RadioGroup';

interface IFormRadioGroup
  extends React.ComponentPropsWithoutRef<typeof RadioGroup.Root> {
  name: string;
}

export function FormRadioGroup({ name, ...props }: IFormRadioGroup) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, disabled } }) => (
        <RadioGroup.Root
          value={value}
          disabled={props.disabled || disabled}
          onValueChange={onChange}
          {...props}
        />
      )}
    />
  );
}
