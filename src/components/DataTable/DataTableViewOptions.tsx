import { Header } from '@tanstack/react-table';
import { Settings2Icon } from 'lucide-react';

import { Button } from '../Button';
import { DropdownMenuPrimitive } from '../DropdownMenuPrimitive';

import { useDataTable } from './DataTableContext';

export function DataTableViewOptions() {
  const table = useDataTable();

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ikui-ml-auto ikui-hidden ikui-h-8 lg:ikui-flex"
        >
          <Settings2Icon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
          View
        </Button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Content align="end" className="ikui-w-[150px]">
        <DropdownMenuPrimitive.Label>
          Toggle columns
        </DropdownMenuPrimitive.Label>
        <DropdownMenuPrimitive.Separator />
        {table
          .getAllColumns()
          .filter(
            column =>
              typeof column.accessorFn !== 'undefined' && column.getCanHide(),
          )
          .map(column => {
            let headerTitle = '';

            if (typeof column.columnDef?.header === 'function') {
              const headerResult = column.columnDef.header({
                column,
                header: column.columnDef.header as unknown as Header<
                  unknown,
                  unknown
                >,
                table,
              });
              if (headerResult?.props?.title) {
                headerTitle = headerResult.props.title;
              }
            } else if (typeof column.columnDef?.header === 'string') {
              headerTitle = column.columnDef.header;
            }

            return (
              <DropdownMenuPrimitive.CheckboxItem
                key={column.id}
                className="ikui-capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={value => column.toggleVisibility(!!value)}
              >
                {headerTitle || column.id}{' '}
              </DropdownMenuPrimitive.CheckboxItem>
            );
          })}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Root>
  );
}
