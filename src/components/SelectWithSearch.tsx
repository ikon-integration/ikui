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

import { ISelectProps } from '..';

export default function SelectWithSearch({
  placeholder,
  options = [],
  className,
  ariaLabel,
  ...props
}: ISelectProps & { ariaLabel: string }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const matches = useMemo(() => {
    if (!searchValue) return options;
    const keys = ['label', 'value'];
    const matches = matchSorter(options, searchValue, { keys });
    // Radix Select does not work if we don't render the selected item, so we
    // make sure to include it in the list of matches.
    const selectedOption = options.find(option => option.value === value);
    if (selectedOption && !matches.includes(selectedOption)) {
      matches.push(selectedOption);
    }
    return matches;
  }, [searchValue, value]);

  return (
    <RadixSelect.Root
      value={value}
      onValueChange={setValue}
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
        <RadixSelect.Trigger aria-label={ariaLabel} className={className}>
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon className="select-icon">
            <ChevronUpDownIcon />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Content
          role="dialog"
          aria-label={`${ariaLabel}s`}
          position="popper"
          className="popover"
          sideOffset={4}
          alignOffset={-16}
        >
          <div className="combobox-wrapper">
            <div className="combobox-icon">
              <SearchIcon />
            </div>
            <Combobox
              autoSelect
              placeholder={placeholder}
              className="combobox"
              // Ariakit's Combobox manually triggers a blur event on virtually
              // blurred items, making them work as if they had actual DOM
              // focus. These blur events might happen after the corresponding
              // focus events in the capture phase, leading Radix Select to
              // close the popover. This happens because Radix Select relies on
              // the order of these captured events to discern if the focus was
              // outside the element. Since we don't have access to the
              // onInteractOutside prop in the Radix SelectContent component to
              // stop this behavior, we can turn off Ariakit's behavior here.
              onBlurCapture={event => {
                event.preventDefault();
                event.stopPropagation();
              }}
            />
          </div>
          <ComboboxList className="listbox">
            {matches.map(({ label, value }) => (
              <RadixSelect.Item
                key={value}
                value={value}
                asChild
                className="item"
              >
                <ComboboxItem>
                  <RadixSelect.ItemText>{label}</RadixSelect.ItemText>
                  <RadixSelect.ItemIndicator className="item-indicator">
                    <CheckIcon />
                  </RadixSelect.ItemIndicator>
                </ComboboxItem>
              </RadixSelect.Item>
            ))}
          </ComboboxList>
        </RadixSelect.Content>
      </ComboboxProvider>
    </RadixSelect.Root>
  );
}
