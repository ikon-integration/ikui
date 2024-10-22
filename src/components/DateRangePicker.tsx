import { format, isValid, parse } from 'date-fns';
import { CalendarIcon, XIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

import { cn } from '@/lib/utils';

import { Button } from './Button';
import { Calendar } from './Calendar';
import { Input } from './Input';
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
  const [dates, setDates] = useState<DateRange>(value);
  const [inputValue, setInputValue] = useState<string>(() =>
    dates.from && dates.to
      ? `${format(dates.from, formatStr)} - ${format(dates.to, formatStr)}`
      : '',
  );
  const [currentMonth, setCurrentMonth] = useState<Date | undefined>(
    value.from,
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isParsing, setIsParsing] = useState(false);

  useEffect(() => {
    if (value && value.from && value.to) {
      setDates(value);
      setInputValue(
        `${format(value.from, formatStr)} - ${format(value.to, formatStr)}`,
      );
      setCurrentMonth(value.from);
    }
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setInputValue(input);

    const regex =
      /^\w+ \d{1,2}[a-z]{2}, \d{4}( - \w+ \d{1,2}[a-z]{2}, \d{4})?$/;

    if (regex.test(input)) {
      const [fromInput, toInput] = input.split(' - ');

      setIsParsing(true);
      const parsedFrom = parse(fromInput, formatStr, new Date());
      const parsedTo = toInput
        ? parse(toInput, formatStr, new Date())
        : undefined;

      if (isValid(parsedFrom) && (!toInput || isValid(parsedTo!))) {
        const newDates = { from: parsedFrom, to: parsedTo };
        setDates(newDates);
        setCurrentMonth(parsedFrom);
        onChange?.(newDates);
      }
      setIsParsing(false);
    }
  };

  return (
    <Popover.Root
      modal
      onOpenChange={open => {
        if (open && dates.from) {
          setCurrentMonth(dates.from);
        }
      }}
    >
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
            {dates.from &&
              `${format(dates.from, formatStr)} - ${
                dates.to
                  ? format(dates.to, formatStr)
                  : format(dates.from, formatStr)
              }`}
          </span>

          {dates && (
            <span
              role="button"
              tabIndex={0}
              className="ikui-ml-auto ikui-flex ikui-size-4 ikui-items-center ikui-justify-center ikui-rounded-full ikui-bg-foreground ikui-text-background ikui-opacity-0 ikui-transition-all ikui-duration-300 hover:ikui-bg-foreground/80 group-hover:ikui-opacity-100 group-data-[state=open]:ikui-opacity-100"
              onClick={event => {
                event.stopPropagation();

                setDates(initialValue);
                setInputValue('');
                onChange?.(initialValue);
              }}
            >
              <XIcon className="ikui-size-3" />
            </span>
          )}
        </Button>
      </Popover.Trigger>

      <Popover.Content className="ikui-w-auto ikui-p-0">
        <Input
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInputChange}
          variant="centered"
        />

        <Calendar
          mode="range"
          selected={dates}
          month={currentMonth}
          numberOfMonths={numberOfMonths}
          onSelect={selectedDate => {
            const newDates = {
              from: selectedDate?.from,
              to: selectedDate?.to,
            };

            setDates(newDates);
            setInputValue(
              selectedDate?.from && selectedDate?.to
                ? `${format(selectedDate.from, formatStr)} - ${format(
                    selectedDate.to,
                    formatStr,
                  )}`
                : '',
            );
            setCurrentMonth(selectedDate?.from || currentMonth);
            onChange?.(newDates);
          }}
          onMonthChange={setCurrentMonth}
          initialFocus
        />
      </Popover.Content>
    </Popover.Root>
  );
}
