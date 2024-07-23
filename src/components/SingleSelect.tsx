import { Command as CommandPrimitive } from 'cmdk';
import { XIcon, SearchIcon } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

import { Badge } from './Badge';

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

interface ISingleSelectProps {
  onChange?: (selectedOption: string) => void;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  options?: Option[];
  creatable?: boolean;
  className?: string;
  id?: string;
}

export function SingleSelect({
  disabled,
  placeholder,
  options = [],
  creatable,
  className,
  onChange,
  value,
  id,
}: ISingleSelectProps) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const unselectedOptions = useMemo(
    () => options.filter(item => item.value !== value),
    [options, value],
  );

  const shouldShowDropdown =
    isInputFocused &&
    !disabled &&
    (unselectedOptions.length > 0 || (creatable && inputValue.length > 0));

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (
      (event.key === 'Delete' || event.key === 'Backspace') &&
      inputValue === ''
    ) {
      onChange?.('');
    }

    if (event.key === 'Escape') {
      inputRef.current?.blur();
    }
  }

  function handleInputBlur() {
    setIsInputFocused(false);
    setInputValue('');
  }

  function handleSelectOption(selectedOption: string) {
    setInputValue('');
    onChange?.(selectedOption);
    setIsDropdownVisible(false);
  }

  function handleCreateOption(creatingOption: string) {
    setInputValue('');

    const trimmedValue = creatingOption.trim();

    if (trimmedValue !== value) {
      onChange?.(trimmedValue);
    }

    setIsDropdownVisible(false);
  }

  function handleUnselectOption(event: React.MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    onChange?.('');
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
        onClick={() => {
          setIsDropdownVisible(true);
          inputRef.current?.focus();
        }}
      >
        {value && (
          <Badge
            key={value}
            variant="secondary"
            className="max-w-full ikui-gap-1.5 ikui-truncate"
          >
            <span className="ikui-max-w-full ikui-truncate">
              {options.find(opt => opt.value === value)?.label ?? value}
            </span>

            <span
              role="button"
              tabIndex={0}
              className="size-4 ikui-flex ikui-items-center ikui-justify-center ikui-rounded-full ikui-bg-foreground ikui-p-px ikui-transition-all hover:ikui-bg-foreground/80"
              onClick={handleUnselectOption}
            >
              <XIcon className="ikui-size-3 ikui-text-background" />
            </span>
          </Badge>
        )}

        <div className="ikui-flex ikui-flex-1 ikui-items-center">
          {inputValue === '' && !value && (
            <SearchIcon className="ikui-mr-2 ikui-size-4 ikui-text-muted-foreground" />
          )}
          <CommandPrimitive.Input
            ref={inputRef}
            disabled={disabled}
            className="ikui-flex-1 ikui-bg-transparent ikui-outline-none ikui-ring-0 placeholder:ikui-text-muted-foreground disabled:ikui-pointer-events-none"
            placeholder={inputValue === '' && !value ? placeholder : ''}
            value={inputValue}
            onValueChange={setInputValue}
            onFocus={() => setIsInputFocused(true)}
            onBlur={handleInputBlur}
          />
        </div>
      </div>

      {shouldShowDropdown && isDropdownVisible && (
        <div className="ikui-relative">
          <CommandPrimitive.List
            className="ikui-absolute ikui-z-50 ikui-mt-2 ikui-w-full ikui-overflow-y-auto ikui-overflow-x-hidden ikui-rounded-md ikui-border ikui-bg-popover ikui-p-1 ikui-text-popover-foreground ikui-shadow-md ikui-animate-in ikui-fade-in-0 ikui-zoom-in-95 ikui-slide-in-from-top-2"
            style={{ maxHeight: '200px' }}
          >
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
