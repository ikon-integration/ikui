import type { Meta } from '@storybook/react';
import { useMemo, useState } from 'react';

import { DataTable } from '@/components/DataTable';

import { columns } from './data/columns';
import { priorities, statuses } from './data/data';
import { tasks } from './data/tasks';

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>;

export default meta;

function Template() {
  const [searchTerm, setSearchTerm] = useState('');
  const [prioritiesFilter, setPrioritiesFilter] = useState<string[]>([]);

  const filteredTasks = useMemo(
    () =>
      tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [searchTerm],
  );

  return (
    <div className="ikui-max-w-[800px]">
      <DataTable
        data={filteredTasks}
        emptyState={<div>No tasks to display here!</div>}
        columns={columns}
        sorting={{
          manual: false,
          initialSortBy: [{ id: 'title', desc: true }],
          onSortingChange: sortingState => console.log({ sortingState }),
        }}
        pagination={{
          manual: false,
          initialPage: 1,
          pageSize: 10,
          rowsPerPageOptions: [10, 20, 30, 40, 50],
          onPageChange: page => console.log({ page }),
          onPageSizeChange: pageSize => console.log({ pageSize }),
        }}
        rowSelection={{
          disabled: false,
          canSelectAll: true,
          onRowSelectionChange: selectedRows => console.log({ selectedRows }),
        }}
        toolbar={{
          hideableColumns: true,
          textSearch: {
            manual: true,
            placeholder: 'Find a task...',
            value: searchTerm,
            onChange: setSearchTerm,
            onReset: () => setSearchTerm(''),
          },
          filters: [
            {
              manual: false,
              title: 'Status',
              options: statuses,
              column: 'status',
              onChange: selectedFilters => console.log({ selectedFilters }),
            },
            {
              manual: true,
              title: 'Priority',
              options: priorities,
              value: prioritiesFilter,
              onChange: setPrioritiesFilter,
              onReset: () => setPrioritiesFilter([]),
            },
          ],
          extra: (
            <div className="ikui-rounded-md ikui-bg-accent ikui-py-2 ikui-text-center ikui-text-accent-foreground">
              <small>Any extra manual filter can come here!</small>
            </div>
          ),
        }}
      />
    </div>
  );
}

export const Default = Template;
