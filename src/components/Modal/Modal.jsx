import { Backdrop, CrossClose, ModalWindow } from './Modal.styled';
import { useEffect } from 'react';

const Modal = ({ children, closeModal, isWelDone = false }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  return (
    <Backdrop onClick={closeModal}>
      <ModalWindow isWelDone={isWelDone}>
        <CrossClose onClick={closeModal} />
        {children}
      </ModalWindow>
    </Backdrop>
  );
};

export default Modal;
