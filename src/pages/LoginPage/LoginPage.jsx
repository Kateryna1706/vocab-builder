import Logo from 'components/Logo/Logo';
import LoginForm from 'components/LoginForm/LoginForm';

import { Container, List, Position, Wrapper } from './LoginPage.styled';

import illustration from '../../image/illustration.webp';
import illustration2 from '../../image/illustration@2x.webp';

const LoginPage = () => {
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
        <LoginForm />
      </Position>
    </Container>
  );
};

export default LoginPage;
