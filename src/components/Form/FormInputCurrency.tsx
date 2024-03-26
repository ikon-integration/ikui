import { useFormContext } from 'react-hook-form';

import { InputCurrency } from '../InputCurrency';

interface IFormInputCurrencyProps
  extends React.ComponentPropsWithoutRef<typeof InputCurrency> {
  name: string;
}

export function FormInputCurrency({ name, ...props }: IFormInputCurrencyProps) {
  const { register } = useFormContext();

  return <InputCurrency {...props} {...register(name)} />;
}
