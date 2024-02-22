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

const Dashboard = () => {
  return (
    <Container>
      <Filter />
      <Wrapper>
        <Statistics>
          To study: <span>{}</span>
        </Statistics>
        <ButtonWrapper>
          <AddWordBtn type="button">
            Add word <PlusAdd />
          </AddWordBtn>
          <Link to="/training">
            Train oneself <Switch />
          </Link>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
