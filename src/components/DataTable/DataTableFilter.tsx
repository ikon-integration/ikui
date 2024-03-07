import { Column } from '@tanstack/react-table';
import { CheckIcon, PlusCircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Badge } from '../Badge';
import { Button } from '../Button';
import { Command } from '../Command';
import { Popover } from '../Popover';
import { Separator } from '../Separator';

export interface IOption {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface IDataTableFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  options: IOption[];
  value?: string[];
  onChange?: (selectedValues: string[]) => void;
}

export function DataTableFilter<TData, TValue>({
  column,
  title,
  options,
  value,
  onChange,
}: IDataTableFilterProps<TData, TValue>) {
  const isControlled = !!onChange;

  const selectedValues = isControlled
    ? new Set(value ?? [])
    : new Set(column?.getFilterValue() as string[]);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ikui-h-8 ikui-border-dashed"
        >
          <PlusCircleIcon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
          {title}

          {selectedValues?.size > 0 && (
            <>
              <Separator
                orientation="vertical"
                className="ikui-mx-2 ikui-h-4"
              />
              <Badge
                variant="secondary"
                className="ikui-rounded-sm ikui-px-1 ikui-font-normal lg:ikui-hidden"
              >
                {selectedValues.size}
              </Badge>
              <div className="ikui-hidden ikui-space-x-1 lg:ikui-flex">
                {selectedValues.size > 2 ? (
                  <Badge
                    variant="secondary"
                    className="ikui-rounded-sm ikui-px-1 ikui-font-normal"
                  >
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  options
                    .filter(option => selectedValues.has(option.value))
                    .map(option => (
                      <Badge
                        variant="secondary"
                        key={option.value}
                        className="ikui-rounded-sm ikui-px-1 ikui-font-normal"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="ikui-w-[200px] ikui-p-0" align="start">
        <Command.Root>
          <Command.Input placeholder={title} />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>

            <Command.Group>
              {options.map(option => {
                const isSelected = selectedValues.has(option.value);

                return (
                  <Command.Item
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value);
                      } else {
                        selectedValues.add(option.value);
                      }

                      const filterValues = Array.from(selectedValues);

                      if (isControlled) {
                        onChange(filterValues);
                        return;
                      }

                      column?.setFilterValue(
                        filterValues.length ? filterValues : undefined,
                      );
                    }}
                  >
                    <div
                      className={cn(
                        'ikui-mr-2 ikui-flex ikui-h-4 ikui-w-4 ikui-items-center ikui-justify-center ikui-rounded-sm ikui-border ikui-border-primary',
                        isSelected
                          ? 'ikui-bg-primary ikui-text-primary-foreground'
                          : 'ikui-opacity-50 [&_svg]:ikui-invisible',
                      )}
                    >
                      <CheckIcon className={cn('ikui-h-4 ikui-w-4')} />
                    </div>
                    {option.icon && (
                      <option.icon className="ikui-mr-2 ikui-h-4 ikui-w-4 ikui-text-muted-foreground" />
                    )}
                    <span>{option.label}</span>
                  </Command.Item>
                );
              })}
            </Command.Group>

            {selectedValues.size > 0 && (
              <>
                <Command.Separator />
                <Command.Group>
                  <Command.Item
                    onSelect={() => {
                      if (isControlled) {
                        onChange([]);
                        return;
                      }

                      column?.setFilterValue(undefined);
                    }}
                    className="ikui-justify-center ikui-text-center"
                  >
                    Clear filters
                  </Command.Item>
                </Command.Group>
              </>
            )}
          </Command.List>
        </Command.Root>
      </Popover.Content>
    </Popover.Root>
  );
}
