import { cn } from '@/lib/utils';

import { SelectPrimitive } from './SelectPrimitive';

interface ISelectProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
  placeholder?: string;
  options?: {
    label: string;
    value: string;
    disabled?: boolean;
  }[];
  className?: string;
  id?: string;
}

export function Select({
  placeholder,
  options = [],
  className,
  id,
  ...props
}: ISelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className={cn(className)} id={id}>
        <SelectPrimitive.Value placeholder={placeholder} />
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Content>
        {options.map(option => (
          <SelectPrimitive.Item
            value={option.value}
            key={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </SelectPrimitive.Item>
        ))}
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
}
