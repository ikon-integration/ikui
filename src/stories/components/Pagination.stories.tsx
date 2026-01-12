import type { Meta } from '@storybook/react-vite';

import { Pagination } from '@/components/Pagination';

const meta = {
  title: 'Components/Pagination',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination.Root>;

export default meta;

function Template() {
  return (
    <Pagination.Root>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Button>1</Pagination.Button>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Button isActive>2</Pagination.Button>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Button>3</Pagination.Button>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Next />
        </Pagination.Item>
      </Pagination.Content>
    </Pagination.Root>
  );
}

export const Default = Template;
