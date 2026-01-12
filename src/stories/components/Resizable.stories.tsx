import type { Meta } from '@storybook/react-vite';

import { Resizable } from '@/components/Resizable';

const meta = {
  title: 'Components/Resizable',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Resizable>;

export default meta;

function Template() {
  return (
    <Resizable.PanelGroup
      direction="horizontal"
      className="ikui-max-w-md ikui-rounded-lg ikui-border"
    >
      <Resizable.Panel defaultSize={50}>
        <div className="ikui-flex ikui-h-[200px] ikui-items-center ikui-justify-center ikui-p-6">
          <span className="font-semibold">One</span>
        </div>
      </Resizable.Panel>
      <Resizable.Handle />
      <Resizable.Panel defaultSize={50}>
        <Resizable.PanelGroup direction="vertical">
          <Resizable.Panel defaultSize={25}>
            <div className="ikui-flex ikui-h-full ikui-items-center ikui-justify-center ikui-p-6">
              <span className="font-semibold">Two</span>
            </div>
          </Resizable.Panel>
          <Resizable.Handle />
          <Resizable.Panel defaultSize={75}>
            <div className="ikui-flex ikui-h-full ikui-items-center ikui-justify-center ikui-p-6">
              <span className="font-semibold">Three</span>
            </div>
          </Resizable.Panel>
        </Resizable.PanelGroup>
      </Resizable.Panel>
    </Resizable.PanelGroup>
  );
}

export const Default = Template;
