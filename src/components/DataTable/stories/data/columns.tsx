'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/Badge';

import { DataTableColumnHeader } from '../../DataTableColumnHeader';

import { labels, priorities, statuses } from './data';
import { tasks } from './tasks';

type Task = (typeof tasks)[0];

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task" />
    ),
    cell: ({ row }) => (
      <div className="ikui-w-[80px]">{row.getValue('id')}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const label = labels.find(label => label.value === row.original.label);

      return (
        <div className="ikui-flex ikui-space-x-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="ikui-max-w-[500px] ikui-truncate ikui-font-medium">
            {row.getValue('title')}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        status => status.value === row.getValue('status'),
      );

      if (!status) {
        return null;
      }

      return (
        <div className="ikui-flex ikui-w-[100px] ikui-items-center">
          {status.icon && (
            <status.icon className="ikui-mr-2 ikui-h-4 ikui-w-4 ikui-text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        priority => priority.value === row.getValue('priority'),
      );

      if (!priority) {
        return null;
      }

      return (
        <div className="ikui-flex ikui-items-center">
          {priority.icon && (
            <priority.icon className="ikui-mr-2 ikui-h-4 ikui-w-4 ikui-text-muted-foreground" />
          )}
          <span>{priority.label}</span>
        </div>
      );
    },
  },
];
