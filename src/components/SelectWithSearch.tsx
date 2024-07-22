import {
  Combobox,
  ComboboxItem,
  ComboboxList,
  ComboboxProvider,
} from '@ariakit/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import * as RadixSelect from '@radix-ui/react-select';
import { SearchIcon } from 'lucide-react';
import { matchSorter } from 'match-sorter';
import { startTransition, useMemo, useState } from 'react';

import { cn } from '@/lib/utils';

import { ISelectProps } from '..';

export function SelectWithSearch({
  placeholder,
  options = [],
  className,
  ariaLabel,
  onSelect,
  ...props
}: ISelectProps & { ariaLabel?: string; onSelect: (value: string) => void }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const matches = useMemo(() => {
    if (!searchValue) return options;
    const keys = ['label', 'value'];
    const matches = matchSorter(options, searchValue, { keys });
    const selectedOption = options.find(option => option.value === value);
    if (selectedOption && !matches.includes(selectedOption)) {
      matches.push(selectedOption);
    }
    return matches;
  }, [searchValue, value]);

  return (
    <RadixSelect.Root
      value={value}
      onValueChange={e => {
        setValue(e);
        onSelect(e);
      }}
      open={open}
      onOpenChange={setOpen}
      {...props}
    >
      <ComboboxProvider
        open={open}
        setOpen={setOpen}
        resetValueOnHide
        includesBaseElement={false}
        setValue={value => {
          startTransition(() => {
            setSearchValue(value);
          });
        }}
      >
        <RadixSelect.Trigger
          aria-label={ariaLabel}
          className={cn(
            'ikui-flex ikui-h-10 ikui-w-full ikui-items-center ikui-justify-between ikui-rounded-md ikui-border ikui-border-input ikui-bg-background ikui-px-3 ikui-py-2 ikui-text-sm ikui-ring-offset-background ikui-transition-all placeholder:ikui-text-muted-foreground focus:ikui-outline-none focus:ikui-ring-2 focus:ikui-ring-ring focus:ikui-ring-offset-2 disabled:ikui-cursor-not-allowed disabled:ikui-opacity-50 [&>span]:ikui-line-clamp-1',
            className,
          )}
        >
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon className="translate-x-1">
            <ChevronUpDownIcon className="ikui-ml-2 ikui-h-4 ikui-w-4 ikui-opacity-50" />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content
            role="dialog"
            aria-label={`${ariaLabel}s`}
            position="popper"
            sideOffset={4}
            alignOffset={-16}
            className={cn(
              'ikui-relative ikui-z-50 ikui-max-h-96 ikui-min-w-[8rem] ikui-overflow-hidden ikui-rounded-md ikui-border ikui-bg-popover ikui-text-popover-foreground ikui-shadow-md data-[state=open]:ikui-animate-in data-[state=closed]:ikui-animate-out data-[state=closed]:ikui-fade-out-0 data-[state=open]:ikui-fade-in-0 data-[state=closed]:ikui-zoom-out-95 data-[state=open]:ikui-zoom-in-95 data-[side=bottom]:ikui-slide-in-from-top-2 data-[side=left]:ikui-slide-in-from-right-2 data-[side=right]:ikui-slide-in-from-left-2 data-[side=top]:ikui-slide-in-from-bottom-2',
              'data-[side=bottom]:ikui-translate-y-1 data-[side=left]:ikui-translate-x-1 data-[side=right]:ikui-translate-x-1 data-[side=top]:ikui-translate-y-1',
              className,
            )}
          >
            <div className="ikui-flex ikui-items-center ikui-rounded-md ikui-p-2">
              <div className="ikui-absolute ikui-left-2 ikui-flex ikui-items-center ikui-justify-center">
                <SearchIcon className="ikui-ml-2 ikui-h-4 ikui-w-4 ikui-opacity-50" />
              </div>
              <Combobox
                autoSelect
                placeholder="Type here..."
                className={cn(
                  'ikui-h-10 ikui-w-full ikui-rounded-md ikui-bg-secondary ikui-pl-10 focus:ikui-ring-green-800',
                  className,
                )}
                onBlurCapture={event => {
                  event.preventDefault();
                  event.stopPropagation();
                }}
              />
            </div>
            <ComboboxList className="overflow-y-auto p-1">
              {matches.map(({ label, value }) => (
                <RadixSelect.Item key={value} value={value} asChild>
                  <ComboboxItem
                    className={cn(
                      'transition-shadow duration-200 ease-in-out ikui-relative ikui-flex ikui-w-full ikui-cursor-pointer ikui-select-none ikui-items-center ikui-rounded-sm ikui-py-1.5 ikui-pl-8 ikui-pr-2 ikui-text-sm ikui-outline-none hover:ikui-bg-accent hover:ikui-text-accent-foreground hover:ikui-shadow-lg',
                      className,
                    )}
                  >
                    <RadixSelect.ItemIndicator className="item-indicator ikui-absolute ikui-left-2 ikui-flex ikui-items-center">
                      <CheckIcon className="ikui-h-4 ikui-w-4" />
                    </RadixSelect.ItemIndicator>
                    <RadixSelect.ItemText className="ikui-flex ikui-items-center ikui-pl-6">
                      {label}
                    </RadixSelect.ItemText>
                  </ComboboxItem>
                </RadixSelect.Item>
              ))}
            </ComboboxList>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </ComboboxProvider>
    </RadixSelect.Root>
  );
}
