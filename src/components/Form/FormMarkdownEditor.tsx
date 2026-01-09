import { Controller, useFormContext } from 'react-hook-form';

import { MarkdownEditor } from '../Markdown/MarkdownEditor/MarkdownEditor';

interface IFormMarkdownEditor {
  name: string;
}

export function FormMarkdownEditor({ name }: IFormMarkdownEditor) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState }) => (
        <div className="ikui-flex ikui-flex-col ikui-gap-1">
          <MarkdownEditor value={value ?? ''} onChange={onChange} />

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
