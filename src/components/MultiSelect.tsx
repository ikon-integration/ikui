import { Command as CommandPrimitive } from 'cmdk';
import { XIcon } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import { Badge } from './Badge';

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

interface IMultiSelectProps {
  onChange?: (selectedOptions: string[]) => void;
  value?: string[];
  disabled?: boolean;
  placeholder?: string;
  options?: Option[];
  creatable?: boolean;
  className?: string;
  id?: string;
  alphabeticalSort?: boolean;
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
  alphabeticalSort = true,
}: IMultiSelectProps) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const unselectedOptions = useMemo(() => {
    let filteredOptions = options.filter(item => !value.includes(item.value));

    if (alphabeticalSort) {
      filteredOptions = filteredOptions.sort((a, b) =>
        a.label.localeCompare(b.label),
      );
    }

    return filteredOptions;
  }, [options, value, alphabeticalSort]);

  const sortedSelectedOptions = useMemo(() => {
    let selected = value
      .map(selectedValue => options.find(opt => opt.value === selectedValue))
      .filter(Boolean);

    if (alphabeticalSort) {
      selected = selected.sort((a, b) => {
        if (a && b) {
          return a.label.localeCompare(b.label);
        }
        return 0;
      });
    }

    return selected;
  }, [value, options, alphabeticalSort]);

  const isDropdownVisible =
    isInputFocused &&
    !disabled &&
    (unselectedOptions.length > 0 || (creatable && inputValue.length > 0));

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (
      (event.key === 'Delete' || event.key === 'Backspace') &&
      inputValue === ''
    ) {
      const newState = [...value];
      newState.pop();

      onChange?.(newState);
    }

    if (event.key === 'Escape') {
      inputRef.current?.blur();
    }
  }

  function handleInputBlur() {
    setIsInputFocused(false);
    setInputValue('');
  }

  function handleSelectOption(selectedOptions: string) {
    setInputValue('');
    const newState = value.concat(selectedOptions);

    onChange?.(newState);
  }

  function handleCreateOption(creatingOption: string) {
    setInputValue('');

    const trimmedValue = creatingOption.trim();

    if (!value.includes(trimmedValue)) {
      const newState = value.concat(trimmedValue);
      onChange?.(newState);
    }
  }

  function handleUnselectOption(
    event: React.MouseEvent,
    removingOption: string,
  ) {
    event.preventDefault();
    event.stopPropagation();

    const newState = value.filter(option => option !== removingOption);
    onChange?.(newState);

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
        className="ikui-sr-only ikui-pointer-events-none"
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
        {sortedSelectedOptions.length > 0 &&
          sortedSelectedOptions.map(option => (
            <Badge
              key={`${option?.value}`}
              variant="secondary"
              className="ikui-gap-1.5"
            >
              <span>{option?.label}</span>
              <span
                role="button"
                tabIndex={0}
                className="size-4 ikui-flex ikui-items-center ikui-justify-center ikui-rounded-full ikui-bg-foreground ikui-p-px ikui-transition-all hover:ikui-bg-foreground/80"
                onClick={event =>
                  handleUnselectOption(event, option?.value || '')
                }
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
                value={option.label}
                onSelect={() => handleSelectOption(option.value)}
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
