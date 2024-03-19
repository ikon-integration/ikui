import type { Meta } from '@storybook/react';

import { Layout } from '@/components/Layout';

const meta = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    sidebarCollapsedSize: 4,
    sidebarSize: 10,
  },
} satisfies Meta<typeof Layout>;

export default meta;

function Template() {
  return (
    <div className="ikui-w-[950px]">
      <Layout
        sidebarHeader={isCollapsed => (
          <div>{isCollapsed ? 'Collapsed Header' : 'Uncollapsed Header'}</div>
        )}
      >
        Page content
      </Layout>
    </div>
  );
}

export const Default = Template;
