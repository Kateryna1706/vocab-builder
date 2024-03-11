import { ContextMenu, ContextMenuItem } from './ContextMenu.styled';

import { deleteWord, getStatistics } from 'redux/words/wordsOperations';
import { useDispatch } from 'react-redux';

import { Notify } from 'notiflix';

import { ReactComponent as Edit } from '../Icons/edit.svg';
import { ReactComponent as Delete } from '../Icons/trash.svg';

const ContexMenu = ({ openModal, original, setContextMenuIsOpen }) => {
  const dispatch = useDispatch();

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
  return (
    <ContextMenu>
      <ContextMenuItem
        onClick={() => {
          setContextMenuIsOpen(false);
          openModal(original);
        }}
      >
        <Edit />
        <span>Edit</span>
      </ContextMenuItem>
      <ContextMenuItem onClick={() => handleDeleteWord(original._id)}>
        <Delete />
        <span>Delete</span>
      </ContextMenuItem>
    </ContextMenu>
  );
};

export default ContexMenu;
