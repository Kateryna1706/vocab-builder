import Logo from 'components/Logo/Logo';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Container, List, Position, Wrapper } from './RegisterPage.styled';

import illustration from '../../image/illustration.webp';
import illustration2 from '../../image/illustration@2x.webp';

const RegisterPage = () => {
  return (
    <Container>
      <Logo />
      <Position>
        <Wrapper>
          <img
            className="illustration"
            srcSet={`${illustration} 1x, ${illustration2} 2x`}
            src={illustration}
            alt="boy and girl reading a book"
            loading="lazy"
          />
          <List>
            <li>Word</li>
            <li>Translation</li>
            <li>Grammar</li>
            <li>Progress</li>
          </List>
        </Wrapper>
        <RegisterForm />
      </Position>
    </Container>
  );
};

export default RegisterPage;
