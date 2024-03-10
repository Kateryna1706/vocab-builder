import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useDispatch } from 'react-redux';
import { useMemo, useState } from 'react';
import {
  ContextMenu,
  ContextMenuItem,
  ProgressWrapper,
  TableContainer,
  Wrapper,
} from './WordsTable.styled';
import { ReactComponent as Switch } from '../Icons/switch-horizontal.svg';
import { useLocation } from 'react-router-dom';
import {
  addWord,
  deleteWord,
  getStatistics,
} from 'redux/words/wordsOperations';
import { ReactComponent as Edit } from '../Icons/edit.svg';
import { ReactComponent as Delete } from '../Icons/trash.svg';
import EditWordModal from 'components/EditWordModal/EditWordModal';
import { Notify } from 'notiflix';
import { useAdaptive } from 'hooks/useAdaptive';
import { ReactComponent as Ukraine } from '../Icons/ukraine.svg';
import { ReactComponent as English } from '../Icons/united-kingdom.svg';
import { CircularProgress } from '@mui/joy';

const WordsTable = ({ data }) => {
  const dispatch = useDispatch();
  const { isTablet, isDesktop } = useAdaptive();
  // const rerender = useReducer(() => ({}), {})[1];
  const { pathname } = useLocation();
  const columnHelper = createColumnHelper();
  const [contextMenuId, setContextMenuId] = useState('');
  const [contextMenuIsOpen, setContextMenuIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});

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

  const openModal = word => {
    setContextMenuIsOpen(false);
    console.log(contextMenuIsOpen);
    setDataModal(word);
    setIsModalOpen(true);
    document.body.classList.add('hidden');
  };

  const closeModal = event => {
    if (event?.target !== event?.currentTarget) return;
    setIsModalOpen(false);
    document.body.classList.remove('hidden');
  };

  const handleAddWord = id => {
    dispatch(addWord(id))
      .then(data => {
        if (data.payload === 'Request failed with status code 400') {
          Notify.failure(`Bad request (invalid request body)`);
          return;
        }

        if (data.payload === 'Request failed with status code 401') {
          Notify.failure(`Such a word exists`);
          return;
        }

        if (data.payload === 'Request failed with status code 404') {
          Notify.failure(`Service not found`);
          return;
        }

        Notify.success(`The word added successfully.`);
        dispatch(getStatistics());
      })
      .catch(error => {
        Notify.failure(error);
      });
  };

  const handleContexMenu = id => {
    setContextMenuId(id);
    setContextMenuIsOpen(true);
  };

  const handleDeleteWord = id => {
    dispatch(deleteWord(id))
      .then(data => {
        if (data.payload === 'Request failed with status code 400') {
          Notify.failure(`Bad request (invalid request body)`);
          return;
        }

        if (data.payload === 'Request failed with status code 401') {
          Notify.failure(`This word not found`);
          return;
        }

        if (data.payload === 'Request failed with status code 404') {
          Notify.failure(`Service not found`);
          return;
        }
        setContextMenuIsOpen(false);
        Notify.success(`The word deleted successfully.`);
        dispatch(getStatistics());
      })
      .catch(error => {
        Notify.failure(error);
      });
  };

  const columns = [
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
        return (
          <ProgressWrapper>
            {(isTablet || isDesktop) && (
              <span className="progress">{props.row.original.progress}</span>
            )}
            <CircularProgress
              determinate
              variant="solid"
              value={props.row.original.progress}
              sx={{
                '--CircularProgress-size': `${
                  isTablet || isDesktop ? '32px' : '30px'
                }`,
                '--CircularProgress-trackThickness': '6px',
                '--CircularProgress-trackColor': '#D4F8D3',
                '--CircularProgress-progressColor': '#2BD627',
              }}
            />
          </ProgressWrapper>
        );
      },
      footer: info => info.column.id,
    }),
    columnHelper.display({
      id: 'actions',
      cell: props => {
        return pathname === '/recommend' ? (
          <Wrapper>
            {(isTablet || isDesktop) && <span>Add to dictionary</span>}
            <button
              type="button"
              onClick={() => handleAddWord(props.row.original._id)}
            >
              <Switch />
            </button>
          </Wrapper>
        ) : (
          <button
            type="button"
            onClick={() => handleContexMenu(props.row.original._id)}
          >
            <span>...</span>
            {contextMenuId === props.row.original._id && contextMenuIsOpen && (
              <ContextMenu>
                <ContextMenuItem
                  onClick={() => {
                    openModal({
                      ...props.row.original,
                    });
                  }}
                >
                  <Edit />
                  <span>Edit</span>
                </ContextMenuItem>
                <ContextMenuItem
                  onClick={() => handleDeleteWord(props.row.original._id)}
                >
                  <Delete />
                  <span>Delete</span>
                </ContextMenuItem>
              </ContextMenu>
            )}
          </button>
        );
      },
    }),
  ];

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
