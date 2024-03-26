import { format } from 'date-fns';
import { CalendarIcon, XIcon } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from './Button';
import { Calendar } from './Calendar';
import { Popover } from './Popover';

interface IDatePickerProps {
  value?: Date;
  placeholder?: string;
  format?: string;
  className?: string;
  onChange?: (date: Date | undefined) => void;
  disabled?: boolean;
  id?: string;
}

export function DatePicker({
  value,
  placeholder,
  format: formatStr = 'PPP',
  className,
  onChange,
  disabled,
  id,
}: IDatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(value);

  return (
    <Popover.Root>
      <Popover.Trigger disabled={disabled} asChild>
        <Button
          variant="outline"
          id={id}
          className={cn(
            'ikui-group ikui-w-full ikui-justify-start ikui-text-left ikui-font-normal',
            !date && 'ikui-text-muted-foreground',
            className,
          )}
        >
          <CalendarIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />

          <span>
            {date
              ? format(date, formatStr)
              : placeholder && <span>{placeholder}</span>}
          </span>

          {date && (
            <span
              role="button"
              tabIndex={0}
              className="ikui-ml-auto ikui-flex ikui-size-4 ikui-items-center ikui-justify-center ikui-rounded-full ikui-bg-foreground ikui-text-background ikui-opacity-0 ikui-transition-all ikui-duration-300 hover:ikui-bg-foreground/80 group-hover:ikui-opacity-100"
              onClick={event => {
                event.stopPropagation();

                setDate(undefined);
                onChange?.(undefined);
              }}
            >
              <XIcon className="ikui-size-3" />
            </span>
          )}
        </Button>
      </Popover.Trigger>

      <Popover.Content className="ikui-w-auto ikui-p-0">
        <Calendar
          mode="single"
          selected={date}
          defaultMonth={date}
          onSelect={selectedDate => {
            setDate(selectedDate);
            onChange?.(selectedDate);
          }}
          initialFocus
        />
      </Popover.Content>
    </Popover.Root>
  );
}
