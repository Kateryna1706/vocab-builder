import EditWordForm from 'components/EditWordForm/EditWordForm';
import Modal from 'components/Modal/Modal';

const EditWordModal = ({ dataModal, closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <EditWordForm dataModal={dataModal} closeModal={closeModal} />
    </Modal>
  );
};

export default EditWordModal;
