import { Filter } from 'components/Filter/Filter';
import {
  AddWordBtn,
  ButtonWrapper,
  Container,
  Link,
  Statistics,
  Wrapper,
} from './Dashboard.styled';
import { ReactComponent as PlusAdd } from '../Icons/plus-add.svg';
import { ReactComponent as Switch } from '../Icons/switch-horizontal.svg';
import { useSelector } from 'react-redux';
import { selectStatistics } from 'redux/words/wordsSelectors';
import { useState } from 'react';
import AddWordModal from 'components/AddWordModal/AddWordModal';

const Dashboard = () => {
  const statistics = useSelector(selectStatistics);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('hidden');
  };

  const closeModal = event => {
    if (event?.target !== event?.currentTarget) return;
    setIsModalOpen(false);
    document.body.classList.remove('hidden');
  };

  return (
    <Container>
      <Filter />
      <Wrapper>
        <Statistics>
          To study: <span>{statistics}</span>
        </Statistics>
        <ButtonWrapper>
          <AddWordBtn type="button" onClick={openModal}>
            Add word <PlusAdd />
          </AddWordBtn>
          <Link to="/training">
            Train oneself <Switch />
          </Link>
        </ButtonWrapper>
      </Wrapper>
      {isModalOpen && <AddWordModal closeModal={closeModal} />}
    </Container>
  );
};

export default Dashboard;
