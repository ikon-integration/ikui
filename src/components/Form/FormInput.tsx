import { useFormContext } from 'react-hook-form';

import { Input } from '../Input';

interface IFormInputProps extends React.ComponentPropsWithoutRef<typeof Input> {
  name: string;
}

export function FormInput({ name, ...props }: IFormInputProps) {
  const { register } = useFormContext();

  return <Input {...props} {...register(name)} />;
}
