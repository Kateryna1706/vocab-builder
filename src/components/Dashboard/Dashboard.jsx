import { Filter } from 'components/Filter/Filter';
import AddWordModal from 'components/AddWordModal/AddWordModal';
import {
  AddWordBtn,
  ButtonWrapper,
  Container,
  Link,
  Statistics,
  Wrapper,
} from './Dashboard.styled';

import { useSelector } from 'react-redux';
import { selectStatistics } from 'redux/words/wordsSelectors';

import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ReactComponent as PlusAdd } from '../Icons/plus-add.svg';
import { ReactComponent as Switch } from '../Icons/switch-horizontal.svg';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { pathname } = useLocation();
  const statistics = useSelector(selectStatistics);

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
          {pathname !== '/recommend' && (
            <AddWordBtn type="button" onClick={openModal}>
              Add word <PlusAdd />
            </AddWordBtn>
          )}
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
