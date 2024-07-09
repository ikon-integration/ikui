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

type TFilePartial = Partial<File>;

type TFile = {
  name?: string;
  id?: string;
} & TFilePartial;

interface IUploadProps {
  onUpload: (file: TFile) => void;
  onPreview: (file: TFile) => void;
  onDownload: (file: TFile) => void;
  onDelete: (file: TFile) => void;
  files?: TFile[];
  uploadTitle?: string;
  uploadText?: string;
  icon?: React.ReactNode;
  maxFiles?: number;
}

export function Upload({
  onUpload,
  onPreview,
  onDownload,
  onDelete,
  files,
  uploadTitle,
  uploadText,
  icon,
  maxFiles = 10,
}: IUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<TFile[]>(files || []);

  const handleUpload = async (file: TFile) => {
    setUploadedFiles([...uploadedFiles, file]);
    if (onUpload) {
      onUpload(file);
    }
  };

  const handlePreview = async (file: TFile) => {
    if (onPreview) {
      onPreview(file);
    }
  };

  const handleDownload = async (file: TFile) => {
    if (onDownload) {
      onDownload(file);
    }
  };

  const handleDelete = async (file: TFile) => {
    setUploadedFiles(prevFiles =>
      prevFiles.filter(uploadedFile => uploadedFile !== file),
    );

    if (onDelete) {
      onDelete(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: TFile[]) => {
      const newFiles = acceptedFiles.map((file: TFile) => {
        handleUpload(file);
        return file;
      });
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    },
    maxFiles,
  });

  return (
    <div className="flex flex-col">
      {uploadedFiles.length < maxFiles && (
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
          <p className="mb-4 mt-4 text-xl font-semibold text-center">
            {uploadTitle}
            {!uploadTitle && 'Click or drag file to this area to upload'}
          </p>
          <p className="text-slate-300 text-center">
            {uploadText}
            {!uploadText &&
              `Support for a single or bulk upload with a max of ${maxFiles} files.`}
          </p>
        </div>
      )}
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
