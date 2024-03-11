import { Settings2Icon } from 'lucide-react';

import { Button } from '../Button';
import { DropdownMenu } from '../DropdownMenu';

import { useDataTable } from './DataTableContext';

export function DataTableViewOptions() {
  const table = useDataTable();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ikui-ml-auto ikui-hidden ikui-h-8 lg:ikui-flex"
        >
          <Settings2Icon className="ikui-mr-2 ikui-h-4 ikui-w-4" />
          View
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" className="ikui-w-[150px]">
        <DropdownMenu.Label>Toggle columns</DropdownMenu.Label>
        <DropdownMenu.Separator />
        {table
          .getAllColumns()
          .filter(
            column =>
              typeof column.accessorFn !== 'undefined' && column.getCanHide(),
          )
          .map(column => (
            <DropdownMenu.CheckboxItem
              key={column.id}
              className="ikui-capitalize"
              checked={column.getIsVisible()}
              onCheckedChange={value => column.toggleVisibility(!!value)}
            >
              {column.id}
            </DropdownMenu.CheckboxItem>
          ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
