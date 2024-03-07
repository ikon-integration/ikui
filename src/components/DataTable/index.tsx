import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';

import { Table } from '../Table';

import { DataTableProvider } from './DataTableContext';
import { DataTablePagination } from './DataTablePagination';
import { DataTableToolbar, IDataTableToolbarProps } from './DataTableToolbar';

interface IDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  toolbar?: IDataTableToolbarProps<TData>;
  onSortingChange?: (sortingState: SortingState) => void;
  enableRowSelection?: boolean;
  onRowSelectionChange?: (selectedRows: TData[]) => void;
  pagination?: {
    initialPage: number;
    pageSize: number;
  };
}

export function DataTable<TData, TValue>({
  columns,
  data,
  toolbar,
  onSortingChange,
  enableRowSelection,
  onRowSelectionChange,
  pagination: paginationConfig,
}: IDataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: paginationConfig ? paginationConfig.initialPage - 1 : 0,
    pageSize: paginationConfig?.pageSize ?? 10,
  });

  useEffect(() => {
    onSortingChange?.(sorting);
  }, [sorting, onSortingChange]);

  useEffect(() => {
    const selectedRows = Object.entries(rowSelection).map(
      ([key, value]) => value && data[Number(key)],
    );

    onRowSelectionChange?.(selectedRows as TData[]);
  }, [rowSelection, onRowSelectionChange, data]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      ...(paginationConfig && { pagination }),
    },
    manualSorting: !!onSortingChange,
    onSortingChange: setSorting,
    enableRowSelection,
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    getPaginationRowModel: paginationConfig && getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <DataTableProvider table={table}>
      <div className="ikui-space-y-4">
        <DataTableToolbar {...toolbar} />

        <div className="ikui-rounded-md ikui-border">
          <Table.Root>
            <Table.Header>
              {table.getHeaderGroups().map(headerGroup => (
                <Table.Row key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <Table.Head key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </Table.Head>
                  ))}
                </Table.Row>
              ))}
            </Table.Header>
            <Table.Body>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map(row => (
                  <Table.Row
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map(cell => (
                      <Table.Cell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </Table.Cell>
                    ))}
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell
                    colSpan={columns.length}
                    className="ikui-h-24 ikui-text-center"
                  >
                    No results.
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Root>
        </div>
        <DataTablePagination />
      </div>
    </DataTableProvider>
  );
}
