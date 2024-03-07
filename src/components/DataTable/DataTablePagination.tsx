import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from 'lucide-react';

import { Button } from '../Button';
import { Select } from '../Select';

import { useDataTable } from './DataTableContext';

interface IDataTablePaginationProps {
  rowsPerPage?: number[];
}

export function DataTablePagination({
  rowsPerPage,
}: IDataTablePaginationProps) {
  const table = useDataTable();

  return (
    <div className="ikui-flex ikui-items-center ikui-justify-between ikui-px-2">
      <div className="ikui-flex-1 ikui-text-sm ikui-text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{' '}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="ikui-flex ikui-items-center ikui-space-x-6 lg:ikui-space-x-8">
        {rowsPerPage && rowsPerPage.length > 0 && (
          <div className="ikui-flex ikui-items-center ikui-space-x-2">
            <p className="ikui-text-sm ikui-font-medium">Rows per page</p>
            <Select.Root
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={value => {
                table.setPageSize(Number(value));
              }}
            >
              <Select.Trigger className="ikui-h-8 ikui-w-[70px]">
                <Select.Value
                  placeholder={table.getState().pagination.pageSize}
                />
              </Select.Trigger>
              <Select.Content side="top">
                {rowsPerPage.map(pageSize => (
                  <Select.Item key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
          </div>
        )}
        <div className="ikui-flex ikui-w-[100px] ikui-items-center ikui-justify-center ikui-text-sm ikui-font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount()}
        </div>
        <div className="ikui-flex ikui-items-center ikui-space-x-2">
          <Button
            variant="outline"
            className="ikui-hidden ikui-h-8 ikui-w-8 ikui-p-0 lg:ikui-flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="ikui-sr-only">Go to first page</span>
            <ChevronsLeftIcon className="ikui-absolute ikui-h-4 ikui-w-4" />
          </Button>
          <Button
            variant="outline"
            className="ikui-h-8 ikui-w-8 ikui-p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="ikui-sr-only">Go to previous page</span>
            <ChevronLeftIcon className="ikui-absolute ikui-h-4 ikui-w-4" />
          </Button>
          <Button
            variant="outline"
            className="ikui-h-8 ikui-w-8 ikui-p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="ikui-sr-only">Go to next page</span>
            <ChevronRightIcon className="ikui-absolute ikui-h-4 ikui-w-4" />
          </Button>
          <Button
            variant="outline"
            className="ikui-hidden ikui-h-8 ikui-w-8 ikui-p-0 lg:ikui-flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="ikui-sr-only">Go to last page</span>
            <ChevronsRightIcon className="ikui-absolute ikui-h-4 ikui-w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
