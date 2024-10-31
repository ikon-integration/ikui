import { format, isValid, parse } from 'date-fns';
import { CalendarIcon, XIcon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

import { Button } from './Button';
import { Calendar } from './Calendar';
import { Input } from './Input';
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

const initialValue: Date | undefined = undefined;

export function DatePicker({
  value = initialValue,
  placeholder,
  format: formatStr = 'yyyy-MM-dd',
  className,
  onChange,
  disabled,
  id,
}: IDatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(value);
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [currentMonth, setCurrentMonth] = useState<Date | undefined>(value);
  const isExternalChange = useRef(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const validateAndFormatDate = () => {
    if (inputValue === '') {
      setDate(undefined);
      setError(false);
      onChange?.(undefined);
    } else {
      const parsedDate = parse(inputValue, formatStr, new Date());

      if (isValid(parsedDate)) {
        setDate(parsedDate);
        setInputValue(format(parsedDate, formatStr));
        onChange?.(parsedDate);
        setCurrentMonth(parsedDate);
        setError(false);
      } else {
        setDate(undefined);
        onChange?.(undefined);
        setError(true);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      validateAndFormatDate();
    }
  };

  useEffect(() => {
    if (isExternalChange.current) {
      if (value) {
        setDate(value);
        setInputValue(format(value, formatStr));
        setCurrentMonth(value);
      } else {
        setDate(undefined);
        setInputValue('');
        setCurrentMonth(undefined);
      }
    }
    isExternalChange.current = true;
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    setDate(initialValue);
    setInputValue('');
    onChange?.(initialValue);
    isExternalChange.current = false;
  };

  return (
    <Popover.Root
      modal
      onOpenChange={open => {
        if (open) {
          setCurrentMonth(date ?? new Date());
          setInputValue(date ? format(date, formatStr) : '');
        }
      }}
    >
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
              className="ikui-ml-auto ikui-flex ikui-size-4 ikui-items-center ikui-justify-center ikui-rounded-full ikui-bg-foreground ikui-text-background ikui-opacity-0 ikui-transition-all ikui-duration-300 hover:ikui-bg-foreground/80 group-hover:ikui-opacity-100 group-data-[state=open]:ikui-opacity-100"
              onClick={handleClear}
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
          placeholder="YYYY-MM-DD"
          onChange={handleInputChange}
          onBlur={validateAndFormatDate}
          onKeyDown={handleKeyDown}
          className="ikui-mb-2"
          variant="centered"
          error={error}
        />

        <Calendar
          mode="single"
          selected={date}
          month={currentMonth}
          onSelect={selectedDate => {
            setDate(selectedDate);
            setInputValue(selectedDate ? format(selectedDate, formatStr) : '');
            onChange?.(selectedDate);
            setError(false);
            setCurrentMonth(selectedDate || currentMonth);
          }}
          onMonthChange={setCurrentMonth}
          initialFocus
        />
      </Popover.Content>
    </Popover.Root>
  );
}
