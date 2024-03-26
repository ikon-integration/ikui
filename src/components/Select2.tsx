import { cn } from '@/lib/utils';

import { Select } from './Select';

interface ISelect2Props
  extends React.ComponentPropsWithoutRef<typeof Select.Root> {
  placeholder?: string;
  options?: {
    label: string;
    value: string;
    disabled?: boolean;
  }[];
  className?: string;
  id?: string;
}

export function Select2({
  placeholder,
  options = [],
  className,
  id,
  ...props
}: ISelect2Props) {
  return (
    <Select.Root {...props}>
      <Select.Trigger className={cn(className)} id={id}>
        <Select.Value placeholder={placeholder} />
      </Select.Trigger>

      <Select.Content>
        {options.map(option => (
          <Select.Item
            value={option.value}
            key={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
