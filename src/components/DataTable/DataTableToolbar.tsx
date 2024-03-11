/* eslint-disable react/no-array-index-key */

'use client';

import { XIcon } from 'lucide-react';

import { Button } from '../Button';
import { Input } from '../Input';

import { useDataTable } from './DataTableContext';
import { DataTableFilter, IOption } from './DataTableFilter';
import { DataTableViewOptions } from './DataTableViewOptions';

interface IAutomaticTextSearch<TData> {
  manual: false;
  column: keyof TData;
}

interface IManualTextSearch {
  manual: true;
  value: string;
  onChange: (searchTerm: string) => void;
  onReset: () => void;
}

type TextSearch<TData> = {
  placeholder?: string;
} & (IAutomaticTextSearch<TData> | IManualTextSearch);

interface ICommonFilter {
  onChange?: (selectedFilters: string[]) => void;
}

interface IAutomaticFilter<TData> extends ICommonFilter {
  manual: false;
  column: keyof TData;
}

interface IManualFilter extends ICommonFilter {
  manual: true;
  value: string[];
  onReset: () => void;
}

type Filter<TData> = {
  title: string;
  options: IOption[];
} & (IAutomaticFilter<TData> | IManualFilter);

export interface IDataTableToolbarProps<TData> {
  hideableColumns?: boolean;
  textSearch?: TextSearch<TData>;
  filters?: Filter<TData>[];
  extra?: React.ReactNode;
}

export function DataTableToolbar<TData>({
  hideableColumns,
  textSearch,
  filters,
  extra,
}: IDataTableToolbarProps<TData>) {
  const table = useDataTable();

  const isFiltered =
    table.getState().columnFilters.length > 0 ||
    (textSearch?.manual && !!textSearch.value);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!textSearch) {
      return;
    }

    const { value } = event.target;

    if (textSearch.manual) {
      textSearch.onChange(value);
      return;
    }

    table.getColumn(textSearch.column as string)?.setFilterValue(value);
  }

  function handleReset() {
    table.resetColumnFilters();

    if (textSearch?.manual) {
      textSearch.onReset();
    }

    filters?.forEach(filter => {
      if (filter.manual) {
        filter.onReset();
      }
    });
  }

  const shouldRenderToolbar =
    textSearch || (filters && filters.length > 0) || hideableColumns;

  return (
    <>
      {shouldRenderToolbar && (
        <div className="ikui-flex ikui-items-center ikui-justify-between">
          <div className="ikui-flex ikui-flex-1 ikui-items-center ikui-space-x-2">
            {textSearch && (
              <Input
                placeholder={textSearch.placeholder}
                value={
                  textSearch.manual
                    ? textSearch.value
                    : (table
                        .getColumn(textSearch.column as string)
                        ?.getFilterValue() as string) ?? ''
                }
                onChange={handleInputChange}
                className="ikui-h-8 ikui-w-[150px] lg:ikui-w-[250px]"
              />
            )}

            {filters?.map((filter, index) => (
              <DataTableFilter
                key={index}
                manual={filter.manual}
                title={filter.title}
                options={filter.options}
                value={'value' in filter ? filter.value : undefined}
                onChange={filter?.onChange}
                column={
                  'column' in filter
                    ? table.getColumn(filter.column as string)
                    : undefined
                }
              />
            ))}

            {isFiltered && (
              <Button
                variant="ghost"
                onClick={handleReset}
                className="ikui-h-8 ikui-px-2 lg:ikui-px-3"
              >
                Reset
                <XIcon className="ikui-ml-2 ikui-h-4 ikui-w-4" />
              </Button>
            )}
          </div>

          {hideableColumns && <DataTableViewOptions />}
        </div>
      )}

      {extra}
    </>
  );
}
