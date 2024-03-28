import { Wrapper } from './Logo.styled';
import { useLocation } from 'react-router-dom';
import logo from '../../image/logo.jpg';

const Logo = () => {
  const location = useLocation();
  const page = location.pathname;

  return (
    <Wrapper $hasPadding={page === '/login' || page === '/register'}>
      <img src={logo} alt="logo" />
      <span>VocabBuilder</span>
    </Wrapper>
  );
};

export default Logo;
