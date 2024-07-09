import { DocumentIcon } from '@heroicons/react/24/solid';
import {
  ArrowDownToLine,
  EyeIcon,
  FolderUpIcon,
  Trash2Icon,
} from 'lucide-react';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { cn } from '@/lib/utils';

import { Button } from './Button';
import { Input } from './Input';

interface IUploadProps {
  onUpload: (file: File) => void;
  onPreview: (file: File) => void;
  onDownload: (file: File) => void;
  onDelete: (file: File) => void;
  uploadText?: string;
  icon?: React.ReactNode;
}

export function Upload({
  onUpload,
  onPreview,
  onDownload,
  onDelete,
  uploadText,
  icon,
}: IUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleUpload = async (file: File) => {
    setUploadedFiles([...uploadedFiles, file]);
    if (onUpload) {
      onUpload(file);
    }
  };

  const handlePreview = async (file: File) => {
    if (onPreview) {
      onPreview(file);
    }
  };

  const handleDownload = async (file: File) => {
    if (onDownload) {
      onDownload(file);
    }
  };

  const handleDelete = async (file: File) => {
    setUploadedFiles(prevFiles =>
      prevFiles.filter(uploadedFile => uploadedFile !== file),
    );

    if (onDelete) {
      onDelete(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file: File) => {
        handleUpload(file);
        return file;
      });
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    },
    maxFiles: 10,
  });

  return (
    <div className="flex flex-col">
      <div
        {...getRootProps()}
        className={cn(
          'mb-4 flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 p-4',
          'hover:bg-gray-100',
          'w-60',
        )}
      >
        <Input {...getInputProps()} />
        {icon || <FolderUpIcon className="mb-2 h-12 w-12" />}
        <p className="mb-4 mt-4 text-2xl font-semibold">
          Click or drag file to this area to upload
        </p>
        <p className="text-slate-300">
          {uploadText ||
            'Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files.'}
        </p>
      </div>
      <div className="flex w-full flex-wrap space-x-2">
        {uploadedFiles.map(file => (
          <div
            key={file.name}
            className="mb-4 flex flex-col items-center justify-center rounded-lg border border-gray-300 p-4"
          >
            <DocumentIcon className="mx-auto h-10 w-10" />
            <span className="break-all text-center text-sm text-gray-700">
              {file.name}
            </span>
            <div className="mt-2 flex items-center justify-center">
              <Button variant="link" onClick={() => handlePreview(file)}>
                <EyeIcon className="h-6 w-4" />
              </Button>
              <Button variant="link" onClick={() => handleDownload(file)}>
                <ArrowDownToLine className="h-6 w-4" />
              </Button>
              <Button variant="link" onClick={() => handleDelete(file)}>
                <Trash2Icon className="h-6 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
