import Logo from 'components/Logo/Logo';
import UserBar from 'components/UserBar/UserBar';
import UserNav from 'components/UserNav/UserNav';

import {
  Container,
  ContainerHeader,
  Wrapper,
  WrapperNavAndBar,
  WrapperNavBarIcon,
} from './Header.styled';

import { useState } from 'react';
import { useAdaptive } from '../../hooks/useAdaptive';

import illustration from '../../image/illustration-menu.webp';
import illustration2 from '../../image/illustration-menu@2x.webp';

import { ReactComponent as Menu } from '../Icons/Nav.svg';
import { ReactComponent as Cross } from '../Icons/cross.svg';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { isDesktop } = useAdaptive();

  const handleClickMenuIcon = () => {
    setMenuIsOpen(prevState => !prevState);
  };

  return (
    <ContainerHeader>
      <Container>
        <Logo />
        <WrapperNavAndBar $burgerMenu={menuIsOpen}>
          <WrapperNavBarIcon $burgerMenu={menuIsOpen}>
            {menuIsOpen || isDesktop ? (
              <UserNav closeMenu={handleClickMenuIcon} />
            ) : null}
            <Wrapper $burgerMenu={menuIsOpen}>
              <UserBar burgerMenu={menuIsOpen} />
              {!isDesktop && menuIsOpen && (
                <Cross onClick={handleClickMenuIcon} className="cross" />
              )}
              {!isDesktop && !menuIsOpen && (
                <Menu onClick={handleClickMenuIcon} className="menu" />
              )}
            </Wrapper>
          </WrapperNavBarIcon>
          {menuIsOpen && (
            <img
              className="illustration"
              srcSet={`${illustration} 1x, ${illustration2} 2x`}
              src={illustration}
              alt="boy and girl reading a book"
              loading="lazy"
            />
          )}
        </WrapperNavAndBar>
      </Container>
    </ContainerHeader>
  );
};

export default Header;
