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
        columns={columns}
        onSortingChange={sortingState => console.log({ sortingState })}
        onRowSelectionChange={selectedRows => console.log({ selectedRows })}
        enableRowSelection
        pagination={{
          initialPage: 2,
          pageSize: 10,
        }}
        toolbar={{
          hideableColumns: true,
          textSearch: {
            controlled: true,
            placeholder: 'Find a task...',
            value: searchTerm,
            onChange: setSearchTerm,
            onReset: () => setSearchTerm(''),
          },
          filters: [
            {
              controlled: false,
              column: 'status',
              title: 'Status',
              options: statuses,
            },
            {
              controlled: true,
              title: 'Priority',
              options: priorities,
              value: prioritiesFilter,
              onChange: setPrioritiesFilter,
              onReset: () => setPrioritiesFilter([]),
            },
          ],
          extra: (
            <div className="ikui-rounded-md ikui-bg-accent ikui-py-2 ikui-text-center ikui-text-accent-foreground">
              <small>Any extra controlled filters can come here...</small>
            </div>
          ),
        }}
      />
    </div>
  );
}

export const Default = Template;
