import type { Meta } from '@storybook/react-vite';

import { Upload } from '@/components/Upload';

const meta = {
  title: 'Components/Upload',
  component: Upload,
} satisfies Meta<typeof Upload>;

export default meta;

export function Template() {
  return (
    <Upload
      onUpload={files => console.log(files)}
      onDelete={file => console.log(file)}
    />
  );
}

export const Default = Upload;
