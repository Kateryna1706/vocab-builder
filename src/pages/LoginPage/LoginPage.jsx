import Logo from 'components/Logo/Logo';
import illustration from '../../image/illustration.webp';
import illustration2 from '../../image/illustration@2x.webp';
import { Container, List, Position, Wrapper } from './LoginPage.styled';
import LoginForm from 'components/LoginForm/LoginForm';

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
