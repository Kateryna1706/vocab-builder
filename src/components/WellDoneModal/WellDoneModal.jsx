import Modal from 'components/Modal/Modal';
import { Header, ListWrapper, Wrapper } from './WellDoneModal.styled';

import openBook from '../../image/open-orange-book-floating.webp';
import openBook2 from '../../image/open-orange-book-floating@2x.webp';

const WellDoneModal = ({ closeModal, correctAnswers, mistakes }) => {
  return (
    <Modal closeModal={closeModal} isWelDone={true}>
      <Header>Well done</Header>
      <Wrapper>
        <ListWrapper>
          <span>Сorrect answers:</span>
          <ul>
            {correctAnswers.map((word, id) => (
              <li key={id}>{word}</li>
            ))}
          </ul>
        </ListWrapper>
        <ListWrapper>
          <span>Mistakes:</span>
          <ul>
            {mistakes.map((word, id) => (
              <li key={id}>{word}</li>
            ))}
          </ul>
          <img
            className="openBook"
            srcSet={`${openBook} 1x, ${openBook2} 2x`}
            src={openBook}
            alt="open orange book"
            loading="lazy"
          />
        </ListWrapper>
      </Wrapper>
    </Modal>
  );
};

export default WellDoneModal;
