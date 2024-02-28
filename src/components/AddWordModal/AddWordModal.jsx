import AddWordForm from 'components/AddWordForm/AddWordForm';
import Modal from 'components/Modal/Modal';
import { Header, Text } from './AddWordModal.styled';

const AddWordModal = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <Header>Add word</Header>
      <Text>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </Text>
      <AddWordForm />
    </Modal>
  );
};

export default AddWordModal;
