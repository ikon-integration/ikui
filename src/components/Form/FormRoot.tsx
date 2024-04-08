import { FieldValues, FormProvider } from 'react-hook-form';
import { z } from 'zod';

import { useForm } from './useForm';

interface IFormRootProps<TFielValues extends FieldValues> {
  children: React.ReactNode;
  form: ReturnType<typeof useForm<z.ZodType<TFielValues>>>;
  onSubmit: (
    data: TFielValues,
    event: React.FormEvent<HTMLFormElement>,
  ) => void;
  onBeforeSubmit?: (
    event: React.FormEvent<HTMLFormElement>,
  ) => void | Promise<void>;
  className?: string;
}

export function FormRoot<TFielValues extends FieldValues>({
  children,
  className,
  onSubmit,
  onBeforeSubmit,
  form,
}: IFormRootProps<TFielValues>) {
  return (
    <FormProvider {...form}>
      <form
        className={className}
        onSubmit={async event => {
          event.stopPropagation();
          await onBeforeSubmit?.(event);
          form.handleSubmit(data => onSubmit(data, event))(event);
        }}
      >
        {children}
      </form>
    </FormProvider>
  );
}
