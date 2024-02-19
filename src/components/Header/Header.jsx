import Logo from 'components/Logo/Logo';
import UserBar from 'components/UserBar/UserBar';
import UserNav from 'components/UserNav/UserNav';
import { useState } from 'react';
import { ReactComponent as Menu } from '../Icons/Nav.svg';
import {
  Container,
  ContainerHeader,
  Wrapper,
  WrapperNavAndBar,
} from './Header.styled';
import { ReactComponent as Cross } from '../Icons/cross.svg';
import illustration from '../../image/illustration-menu.webp';
import illustration2 from '../../image/illustration-menu@2x.webp';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleClickMenuIcon = () => {
    setMenuIsOpen(prevState => !prevState);
  };

  return (
    <ContainerHeader>
      <Logo></Logo>
      <WrapperNavAndBar $burgerMenu={menuIsOpen}>
        <Container $burgerMenu={menuIsOpen}>
          {menuIsOpen && <UserNav />}
          <Wrapper $burgerMenu={menuIsOpen}>
            <UserBar burgerMenu={menuIsOpen} />
            {menuIsOpen ? (
              <Cross onClick={handleClickMenuIcon} />
            ) : (
              <Menu onClick={handleClickMenuIcon} />
            )}
          </Wrapper>
        </Container>
        {menuIsOpen && (
          <img
            className="illustration"
            srcSet={`${illustration} 1x, ${illustration2} 2x`}
            src={illustration}
            alt="boy and girl reading a book"
          />
        )}
      </WrapperNavAndBar>
    </ContainerHeader>
  );
};

export default Header;
