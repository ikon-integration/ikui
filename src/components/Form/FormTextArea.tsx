import { useFormContext } from 'react-hook-form';

import { Textarea } from '../Textarea';

interface IFormTextAreaProps
  extends React.ComponentPropsWithoutRef<typeof Textarea> {
  name: string;
}

export function FormTextArea({ name, ...props }: IFormTextAreaProps) {
  const { register } = useFormContext();

  return <Textarea {...props} {...register(name)} />;
}
