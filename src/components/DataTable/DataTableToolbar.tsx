/* eslint-disable react/no-array-index-key */

'use client';

import { XIcon } from 'lucide-react';

import { Button } from '../Button';
import { Input } from '../Input';

import { useDataTable } from './DataTableContext';
import { DataTableFilter, IOption } from './DataTableFilter';
import { DataTableViewOptions } from './DataTableViewOptions';

interface IUncontrolledTextSearch<TData> {
  controlled: false;
  column: keyof TData;
}

interface IControlledTextSearch {
  controlled: true;
  value: string;
  onChange: (searchTerm: string) => void;
  onReset: () => void;
}

type TextSearch<TData> = {
  placeholder?: string;
} & (IUncontrolledTextSearch<TData> | IControlledTextSearch);

interface IUncontrolledFilter<TData> {
  controlled: false;
  column: keyof TData;
}

interface IControlledFilter {
  controlled: true;
  value: string[];
  onChange: (selectedFilters: string[]) => void;
  onReset: () => void;
}

type Filter<TData> = {
  title: string;
  options: IOption[];
} & (IUncontrolledFilter<TData> | IControlledFilter);

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
    (textSearch?.controlled && !!textSearch.value);

  return (
    <>
      <div className="ikui-flex ikui-items-center ikui-justify-between">
        <div className="ikui-flex ikui-flex-1 ikui-items-center ikui-space-x-2">
          {textSearch && (
            <Input
              placeholder={textSearch.placeholder}
              value={
                textSearch.controlled
                  ? textSearch.value
                  : (table
                      .getColumn(textSearch.column as string)
                      ?.getFilterValue() as string) ?? ''
              }
              onChange={event => {
                const { value } = event.target;

                if (textSearch.controlled) {
                  textSearch.onChange(value);
                  return;
                }

                table
                  .getColumn(textSearch.column as string)
                  ?.setFilterValue(value);
              }}
              className="ikui-h-8 ikui-w-[150px] lg:ikui-w-[250px]"
            />
          )}

          {filters?.map((filter, index) =>
            !filter.controlled ? (
              table.getColumn(filter.column as string) && (
                <DataTableFilter
                  key={index}
                  column={table.getColumn(filter.column as string)}
                  title={filter.title}
                  options={filter.options}
                />
              )
            ) : (
              <DataTableFilter
                key={index}
                title={filter.title}
                options={filter.options}
                value={filter.value}
                onChange={filter.onChange}
              />
            ),
          )}

          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => {
                table.resetColumnFilters();

                if (textSearch?.controlled) {
                  textSearch.onReset();
                }

                filters?.forEach(filter => {
                  if (filter.controlled) {
                    filter.onReset();
                  }
                });
              }}
              className="ikui-h-8 ikui-px-2 lg:ikui-px-3"
            >
              Reset
              <XIcon className="ikui-ml-2 ikui-h-4 ikui-w-4" />
            </Button>
          )}
        </div>

        {hideableColumns && <DataTableViewOptions />}
      </div>

      {extra}
    </>
  );
}
