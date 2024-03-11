import EditWordModal from 'components/EditWordModal/EditWordModal';
import { TableContainer } from './WordsTable.styled';

import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAdaptive } from 'hooks/useAdaptive';

import { getConfigColumns } from 'utils/getConfigColumns';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { ReactComponent as Ukraine } from '../Icons/ukraine.svg';
import { ReactComponent as English } from '../Icons/united-kingdom.svg';

const WordsTable = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const { pathname } = useLocation();
  const { isTablet, isDesktop } = useAdaptive();
  const columnVisibility = useMemo(
    () => ({
      en: true,
      ua: true,
      category: pathname === '/recommend' || isTablet || isDesktop,
      progress: pathname !== '/recommend',
      actions: true,
    }),
    [isDesktop, isTablet, pathname]
  );

  // const rerender = useReducer(() => ({}), {})[1];

  const openModal = word => {
    setDataModal(word);
    setIsModalOpen(true);
    document.body.classList.add('hidden');
  };

  const closeModal = event => {
    if (event?.target !== event?.currentTarget) return;
    setIsModalOpen(false);
    document.body.classList.remove('hidden');
  };

  const columns = getConfigColumns(openModal);

  const table = useReactTable({
    data,
    columns,
    state: { columnVisibility },
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  <div className="wrapper-th">
                    <span>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </span>

                    {header.column.columnDef.header === 'Word' &&
                      (isTablet || isDesktop) && (
                        <English className="english" />
                      )}
                    {header.column.columnDef.header === 'Translation' &&
                      (isTablet || isDesktop) && (
                        <Ukraine className="ukraine" />
                      )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <EditWordModal dataModal={dataModal} closeModal={closeModal} />
      )}
    </TableContainer>
  );
};

export default WordsTable;
