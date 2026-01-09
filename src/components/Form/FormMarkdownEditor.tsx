import { Controller, useFormContext } from 'react-hook-form';

import { MarkdownEditor } from '../Markdown/MarkdownEditor/MarkdownEditor';

interface IFormMarkdownEditor extends React.ComponentPropsWithoutRef<
  typeof MarkdownEditor
> {
  name: string;
}

export function FormMarkdownEditor({ name, ...props }: IFormMarkdownEditor) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, disabled }, fieldState }) => (
        <div className="ikui-flex ikui-flex-col ikui-gap-1">
          <MarkdownEditor
            value={value ?? ''}
            onChange={onChange}
            disabled={props.disabled || disabled}
          />

          {fieldState.error && (
            <span className="ikui-text-xs ikui-text-destructive">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  );
}
