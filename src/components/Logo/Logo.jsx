import logo from '../../image/logo.jpg';
import { Container } from './Logo.styled';

const Logo = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <span>VocabBuilder</span>
    </Container>
  );
};

export default Logo;
