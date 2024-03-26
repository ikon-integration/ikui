import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormProps, useForm as useReactHookForm } from 'react-hook-form';
import { ZodType, z } from 'zod';

type ExtractFieldValues<T> = T extends ZodType<any> ? z.infer<T> : never;

export interface IUseFormOptions<TSchema extends ZodType<any>>
  extends Omit<UseFormProps<ExtractFieldValues<TSchema>>, 'resolver'> {
  schema?: TSchema;
}

export function useForm<TSchema extends ZodType<any>>(
  options: IUseFormOptions<TSchema> = {},
) {
  const form = useReactHookForm({
    ...options,
    resolver: options.schema && zodResolver(options.schema),
  });

  return form;
}
