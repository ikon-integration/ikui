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

import { Checkbox } from '../Checkbox';
import { Table } from '../Table';

import { DataTableProvider } from './DataTableContext';
import { DataTablePagination } from './DataTablePagination';
import { DataTableToolbar, IDataTableToolbarProps } from './DataTableToolbar';

interface IDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  toolbar?: IDataTableToolbarProps<TData>;
  emptyState?: React.ReactNode;
  sorting?: {
    manual: boolean;
    onSortingChange?: (sortingState: SortingState) => void;
    initialSortBy?: { id: string; desc: boolean }[];
  };
  pagination?: {
    manual: boolean;
    initialPage?: number;
    pageSize?: number;
    rowsPerPageOptions?: number[];
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
  };
  rowSelection?: {
    disabled?: boolean;
    canSelectAll?: boolean;
    onRowSelectionChange?: (selectedRows: TData[]) => void;
  };
  initialRowSelection?: Record<string, boolean>;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  toolbar,
  emptyState,
  sorting: sortingConfig,
  pagination: paginationConfig,
  rowSelection: rowSelectionConfig,
  initialRowSelection = {},
}: IDataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>(
    sortingConfig?.initialSortBy || [],
  );
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: paginationConfig?.initialPage
      ? paginationConfig.initialPage - 1
      : 0,
    pageSize: paginationConfig?.pageSize ?? 25,
  });
  const [rowSelection, setRowSelection] = useState(initialRowSelection);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  useEffect(() => {
    sortingConfig?.onSortingChange?.(sorting);
  }, [sorting, sortingConfig]);

  useEffect(() => {
    paginationConfig?.onPageChange?.(pagination.pageIndex + 1);
  }, [pagination.pageIndex, paginationConfig]);

  useEffect(() => {
    paginationConfig?.onPageSizeChange?.(pagination.pageSize);
  }, [pagination.pageSize, paginationConfig]);

  useEffect(() => {
    const selectedRows = Object.entries(rowSelection).map(
      ([key, value]) => value && data[Number(key)],
    );

    rowSelectionConfig?.onRowSelectionChange?.(selectedRows as TData[]);
  }, [data, rowSelection, rowSelectionConfig]);

  const rowSelectionColumn: ColumnDef<TData, TValue> = {
    id: 'select',
    header: ({ table }) =>
      rowSelectionConfig?.canSelectAll && (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="ikui-translate-y-[2px]"
          disabled={rowSelectionConfig?.disabled}
        />
      ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="ikui-translate-y-[2px]"
        disabled={rowSelectionConfig?.disabled}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  };

  const tableColumns: ColumnDef<TData, TValue>[] = [
    ...(rowSelectionConfig ? [rowSelectionColumn] : []),
    ...columns,
  ];

  const table = useReactTable({
    data,
    columns: tableColumns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      ...(paginationConfig && { pagination }),
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: toolbar && getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    // Sorting
    manualSorting: sortingConfig?.manual,
    onSortingChange: setSorting,
    getSortedRowModel: sortingConfig && getSortedRowModel(),
    // Pagination
    manualPagination: paginationConfig?.manual,
    onPaginationChange: setPagination,
    getPaginationRowModel: paginationConfig && getPaginationRowModel(),
    // Row selection
    enableRowSelection: !rowSelectionConfig?.disabled,
    onRowSelectionChange: setRowSelection,
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
                    colSpan={tableColumns.length}
                    className="ikui-h-24 ikui-text-center"
                  >
                    {emptyState ?? 'No results.'}
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Root>
        </div>

        {paginationConfig && (
          <DataTablePagination
            rowsPerPage={paginationConfig?.rowsPerPageOptions}
          />
        )}
      </div>
    </DataTableProvider>
  );
}
