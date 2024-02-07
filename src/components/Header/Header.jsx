import Logo from 'components/Logo/Logo';
import UserBar from 'components/UserBar/UserBar';
import UserNav from 'components/UserNav/UserNav';

const Header = () => {
  return (
    <header>
      <Logo></Logo>
      <UserNav></UserNav>
      <UserBar></UserBar>
    </header>
  );
};

export default Header;
