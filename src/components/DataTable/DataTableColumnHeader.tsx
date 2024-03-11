/* eslint-disable no-nested-ternary */
import { Column } from '@tanstack/react-table';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronsUpDownIcon,
  EyeOffIcon,
} from 'lucide-react';

import { cn } from '@/lib/utils';

import { Button } from '../Button';
import { DropdownMenu } from '../DropdownMenu';

interface IDataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: IDataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div
      className={cn('ikui-flex ikui-items-center ikui-space-x-2', className)}
    >
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="ikui--ml-3 ikui-h-8 data-[state=open]:ikui-bg-accent"
          >
            <span>{title}</span>
            {column.getIsSorted() === 'desc' ? (
              <ArrowDownIcon className="ikui-ml-2 ikui-h-4 ikui-w-4" />
            ) : column.getIsSorted() === 'asc' ? (
              <ArrowUpIcon className="ikui-ml-2 ikui-h-4 ikui-w-4" />
            ) : (
              <ChevronsUpDownIcon className="ikui-ml-2 ikui-h-4 ikui-w-4" />
            )}
          </Button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content align="start">
          <DropdownMenu.Item
            onClick={() => column.toggleSorting(false)}
            className={cn(
              column.getIsSorted() === 'asc' && 'ikui-font-semibold',
            )}
          >
            <ArrowUpIcon className="ikui-mr-2 ikui-h-3.5 ikui-w-3.5 ikui-text-muted-foreground/70" />
            Asc
          </DropdownMenu.Item>

          <DropdownMenu.Item
            onClick={() => column.toggleSorting(true)}
            className={cn(
              column.getIsSorted() === 'desc' && 'ikui-font-semibold',
            )}
          >
            <ArrowDownIcon className="ikui-mr-2 ikui-h-3.5 ikui-w-3.5 ikui-text-muted-foreground/70" />
            Desc
          </DropdownMenu.Item>

          {column.getCanHide() && (
            <>
              <DropdownMenu.Separator />
              <DropdownMenu.Item onClick={() => column.toggleVisibility(false)}>
                <EyeOffIcon className="ikui-mr-2 ikui-h-3.5 ikui-w-3.5 ikui-text-muted-foreground/70" />
                Hide
              </DropdownMenu.Item>
            </>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
