import ProgressBar from 'components/ProgressBar/ProgressBar';
import WordBar from 'components/WordBar/WordBar';

import { createColumnHelper } from '@tanstack/react-table';

export const getConfigColumns = openModal => {
  const columnHelper = createColumnHelper();

  return [
    columnHelper.accessor('en', {
      id: 'en',
      header: 'Word',
      cell: info => info.getValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('ua', {
      id: 'ua',
      header: 'Translation',
      cell: info => info.getValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('category', {
      id: 'category',
      header: 'Category',
      cell: info => info.getValue(),
      footer: info => info.column.id,
    }),
    columnHelper.accessor('progress', {
      id: 'progress',
      header: 'Progress',
      cell: props => {
        return <ProgressBar progress={props.row.original.progress} />;
      },
      footer: info => info.column.id,
    }),
    columnHelper.display({
      id: 'actions',
      cell: props => {
        return <WordBar original={props.row.original} openModal={openModal} />;
      },
    }),
  ];
};
