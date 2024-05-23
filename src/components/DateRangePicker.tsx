import { format } from 'date-fns';
import { CalendarIcon, XIcon } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from './Button';
import { Calendar } from './Calendar';
import { Popover } from './Popover';

type DateRange = {
  from: Date | undefined;
  to: Date | undefined;
};

interface IDateRangePickerProps {
  value?: DateRange;
  placeholder?: string;
  format?: string;
  className?: string;
  onChange?: (date: DateRange) => void;
  disabled?: boolean;
  id?: string;
  numberOfMonths?: number;
}

const initialValue = { from: undefined, to: undefined };

export function DateRangePicker({
  value = initialValue,
  placeholder,
  format: formatStr = 'yyyy-MM-dd',
  className,
  onChange,
  disabled,
  id,
  numberOfMonths = 2,
}: IDateRangePickerProps) {
  const [dates, setDates] = useState(value);

  return (
    <Popover.Root modal>
      <Popover.Trigger disabled={disabled} asChild>
        <Button
          variant="outline"
          id={id}
          className={cn(
            'ikui-group ikui-w-full ikui-justify-start ikui-text-left ikui-font-normal',
            !dates && 'ikui-text-muted-foreground',
            className,
          )}
        >
          <CalendarIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />

          <span>
            {!dates.from && !dates.to && placeholder && (
              <span>{placeholder}</span>
            )}

            {dates.from && format(dates.from, formatStr)}
            {(dates.to && ` - ${format(dates.to, formatStr)}`) ||
              (dates.from && format(dates.from, formatStr))}
          </span>

          {dates && (
            <span
              role="button"
              tabIndex={0}
              className="ikui-ml-auto ikui-flex ikui-size-4 ikui-items-center ikui-justify-center ikui-rounded-full ikui-bg-foreground ikui-text-background ikui-opacity-0 ikui-transition-all ikui-duration-300 hover:ikui-bg-foreground/80 group-hover:ikui-opacity-100 group-data-[state=open]:ikui-opacity-100"
              onClick={event => {
                event.stopPropagation();

                setDates(initialValue);
                onChange?.(initialValue);
              }}
            >
              <XIcon className="ikui-size-3" />
            </span>
          )}
        </Button>
      </Popover.Trigger>

      <Popover.Content className="ikui-w-auto ikui-p-0">
        <Calendar
          mode="range"
          defaultMonth={dates.from}
          numberOfMonths={numberOfMonths}
          selected={dates}
          onSelect={selectedDate => {
            const dateRange = {
              from: selectedDate?.from,
              to: selectedDate?.to,
            };

            setDates(dateRange);
            onChange?.(dateRange);
          }}
          initialFocus
        />
      </Popover.Content>
    </Popover.Root>
  );
}
