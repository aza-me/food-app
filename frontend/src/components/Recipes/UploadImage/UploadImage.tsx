import { FC, useState, MouseEvent, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { ReactComponent as TrashIcon } from '@/assets/icons/trash.svg';
import { ReactComponent as FolderAddIcon } from '@/assets/icons/folder-add.svg';
import { convertToBase64 } from '@/app/utils/convertToBase64.tsx';
import './UploadImage.scss';

interface FileModel {
  file: File;
  preview: string;
}

interface Props {
  onChange: (base64: string) => void;
}

export const UploadRecipeImage: FC<Props> = ({ onChange }) => {
  const [files, setFiles] = useState<FileModel[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => ({
          file,
          preview: URL.createObjectURL(file),
        })),
      );
    },
  });

  useEffect(() => {
    if (files.length > 0) {
      convertToBase64(files[0].file).then((base64) => {
        onChange(base64);
      });
    } else {
      onChange('');
    }
  }, [files]);

  const handleClear = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setFiles([]);
  };

  return (
    <div {...getRootProps()} className="upload-recipe-image">
      <input {...getInputProps()} />
      {files.length > 0 ? (
        <>
          <img src={files[0].preview} className="upload-recipe-image__preview" alt="preview" />
          <div className="upload-recipe-image__clear" onClick={handleClear}>
            <TrashIcon />
          </div>
        </>
      ) : (
        <FolderAddIcon className="upload-recipe-image__add-icon" />
      )}
    </div>
  );
};
