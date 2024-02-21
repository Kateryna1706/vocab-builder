import { useLocation } from 'react-router-dom';
import logo from '../../image/logo.jpg';
import { Container, Wrapper } from './Logo.styled';

const Logo = () => {
  const location = useLocation();
  const page = location.pathname;

  return (
    <Container $hasPadding={page === '/login' || page === '/register'}>
      <Wrapper>
        <img src={logo} alt="logo" />
        <span>VocabBuilder</span>
      </Wrapper>
    </Container>
  );
};

export default Logo;
