import { Command as CommandPrimitive } from 'cmdk';
import { XIcon } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import { Badge } from './Badge';

export type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

interface IMultiSelectProps {
  disabled?: boolean;
  placeholder?: string;
  options?: Option[];
  creatable?: boolean;
  className?: string;
  onChange?: (selectedOptions: string[]) => void;
  value?: string[];
  id?: string;
}

export function MultiSelect({
  disabled,
  placeholder,
  options = [],
  creatable,
  className,
  onChange,
  value = [],
  id,
}: IMultiSelectProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(value);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const unselectedOptions = useMemo(
    () => options.filter(item => !selectedOptions.includes(item.value)),
    [options, selectedOptions],
  );

  const isDropdownVisible =
    isInputFocused &&
    !disabled &&
    (unselectedOptions.length > 0 || (creatable && inputValue.length > 0));

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (
      (event.key === 'Delete' || event.key === 'Backspace') &&
      inputValue === ''
    ) {
      setSelectedOptions(prevState => {
        const newState = [...prevState];
        newState.pop();

        onChange?.(newState);
        return newState;
      });
    }

    if (event.key === 'Escape') {
      inputRef.current?.blur();
    }
  }

  function handleInputBlur() {
    setIsInputFocused(false);
    setInputValue('');
  }

  function handleSelectOption(value: string) {
    setInputValue('');
    setSelectedOptions(prevState => {
      const newState = prevState.concat(value);

      onChange?.(newState);
      return newState;
    });
  }

  function handleCreateOption(value: string) {
    setInputValue('');

    const trimmedValue = value.trim();

    if (!selectedOptions.includes(trimmedValue)) {
      setSelectedOptions(prevState => {
        const newState = prevState.concat(trimmedValue);

        onChange?.(newState);
        return newState;
      });
    }
  }

  function handleUnselectOption(
    event: React.MouseEvent,
    removingOption: string,
  ) {
    event.preventDefault();
    event.stopPropagation();

    setSelectedOptions(prevState => {
      const newState = prevState.filter(option => option !== removingOption);

      onChange?.(newState);
      return newState;
    });
    inputRef.current?.focus();
  }

  return (
    <CommandPrimitive
      onKeyDown={handleKeyDown}
      className="ikui-h-auto ikui-overflow-visible"
    >
      {/*
       * This hidden input is a workaround to focus on CommandPrimitive.Input
       * when an associated Label (by the "id" prop) is clicked
       */}
      <input
        id={id}
        onFocus={() => inputRef.current?.focus()}
        className="ikui-sr-only ikui-pointer-events-none ikui-absolute"
        tabIndex={-1}
        disabled={disabled}
      />

      <div
        role="button"
        tabIndex={0}
        className={cn(
          'ikui-flex ikui-min-h-10 ikui-w-full ikui-cursor-text ikui-flex-wrap ikui-gap-2 ikui-rounded-md ikui-border ikui-border-input ikui-bg-background ikui-px-3 ikui-py-2 ikui-text-sm ikui-ring-offset-background ikui-transition-all focus-within:ikui-outline-none focus-within:ikui-ring-2 focus-within:ikui-ring-ring focus-within:ikui-ring-offset-2',
          disabled && 'ikui-pointer-events-none ikui-opacity-50',
          className,
        )}
        onClick={() => inputRef.current?.focus()}
      >
        {selectedOptions.map(selectedOption => (
          <Badge
            key={selectedOption}
            variant="secondary"
            className="ikui-gap-1.5"
          >
            <span>
              {options.find(opt => opt.value === selectedOption)?.label ??
                selectedOption}
            </span>

            <span
              role="button"
              tabIndex={0}
              className="size-4 ikui-flex ikui-items-center ikui-justify-center ikui-rounded-full ikui-bg-foreground ikui-p-px ikui-transition-all hover:ikui-bg-foreground/80"
              onClick={event => handleUnselectOption(event, selectedOption)}
            >
              <XIcon className="ikui-size-3 ikui-text-background" />
            </span>
          </Badge>
        ))}

        <CommandPrimitive.Input
          ref={inputRef}
          disabled={disabled}
          className="ikui-flex-1 ikui-bg-transparent ikui-outline-none ikui-ring-0 placeholder:ikui-text-muted-foreground disabled:ikui-pointer-events-none"
          placeholder={placeholder}
          value={inputValue}
          onValueChange={setInputValue}
          onFocus={() => setIsInputFocused(true)}
          onBlur={handleInputBlur}
        />
      </div>

      {isDropdownVisible && (
        <div className="ikui-relative">
          <CommandPrimitive.List className="ikui-absolute ikui-z-50 ikui-mt-2 ikui-w-full ikui-overflow-y-auto ikui-overflow-x-hidden ikui-rounded-md ikui-border ikui-bg-popover ikui-p-1 ikui-text-popover-foreground ikui-shadow-md ikui-animate-in ikui-fade-in-0 ikui-zoom-in-95 ikui-slide-in-from-top-2">
            <CommandPrimitive.Empty className="ikui-w-full ikui-cursor-default ikui-select-none ikui-py-1.5 ikui-text-center ikui-text-sm ikui-outline-none">
              No results found.
            </CommandPrimitive.Empty>

            {unselectedOptions.map(option => (
              <CommandPrimitive.Item
                key={option.value}
                value={option.value}
                onSelect={handleSelectOption}
                disabled={option.disabled}
                className="ikui-w-full ikui-cursor-default ikui-select-none ikui-items-center ikui-rounded-sm ikui-px-2 ikui-py-1.5 ikui-text-sm ikui-outline-none aria-selected:ikui-bg-accent aria-selected:ikui-text-accent-foreground data-[disabled]:ikui-pointer-events-none data-[disabled]:ikui-opacity-50"
                onMouseDown={e => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <span>{option.label}</span>
              </CommandPrimitive.Item>
            ))}

            {creatable && inputValue.length > 0 && (
              <CommandPrimitive.Item
                value={inputValue}
                onSelect={() => handleCreateOption(inputValue)}
                className="ikui-w-full ikui-cursor-default ikui-select-none ikui-items-center ikui-rounded-sm ikui-px-2 ikui-py-1.5 ikui-text-sm ikui-outline-none focus:ikui-bg-accent focus:ikui-text-accent-foreground aria-selected:ikui-bg-accent aria-selected:ikui-text-accent-foreground data-[disabled]:ikui-pointer-events-none data-[disabled]:ikui-opacity-50"
                onMouseDown={e => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <span>Create &quot;{inputValue}&quot;</span>
              </CommandPrimitive.Item>
            )}
          </CommandPrimitive.List>
        </div>
      )}
    </CommandPrimitive>
  );
}
