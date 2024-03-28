import ContextMenu from 'components/ContextMenu/ContextMenu';
import { Button } from './WordBar.styled';

import { addWord, getStatistics } from 'redux/words/wordsOperations';

import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAdaptive } from 'hooks/useAdaptive';
import { useClickOutside } from 'hooks/useClickOutside';

import { Notify } from 'notiflix';

import { ReactComponent as Switch } from '../Icons/switch-horizontal.svg';

const WordBar = ({ original, openModal }) => {
  const [contextMenuId, setContextMenuId] = useState('');
  const [contextMenuIsOpen, setContextMenuIsOpen] = useState(false);

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { isTablet, isDesktop } = useAdaptive();
  const menuRef = useRef(null);

  const handleContexMenu = id => {
    setContextMenuId(id);
    setContextMenuIsOpen(true);
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

  useClickOutside(menuRef, () => {
    if (contextMenuIsOpen) {
      setContextMenuIsOpen(false);
    }
  });

  return pathname === '/recommend' ? (
    <Button type="button" onClick={() => handleAddWord(original._id)}>
      {(isTablet || isDesktop) && <span>Add to dictionary</span>}
      <Switch />
    </Button>
  ) : (
    <button
      type="button"
      onClick={() => handleContexMenu(original._id)}
      ref={menuRef}
    >
      <span>...</span>
      {contextMenuId === original._id && contextMenuIsOpen && (
        <ContextMenu
          openModal={openModal}
          original={original}
          setContextMenuIsOpen={setContextMenuIsOpen}
        />
      )}
    </button>
  );
};

export default WordBar;
