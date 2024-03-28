import Logo from 'components/Logo/Logo';
import UserBar from 'components/UserBar/UserBar';
import UserNav from 'components/UserNav/UserNav';
import ButtonLogOut from 'components/ButtonLogOut/ButtonLogOut';

import {
  Container,
  Wrapper,
  WrapperNavAndBar,
  WrapperNavBarIcon,
} from './Header.styled';

import { useRef, useState } from 'react';
import { useAdaptive } from '../../hooks/useAdaptive';
import { useClickOutside } from 'hooks/useClickOutside';

import illustration from '../../image/illustration-menu.webp';
import illustration2 from '../../image/illustration-menu@2x.webp';

import { ReactComponent as Menu } from '../Icons/Nav.svg';
import { ReactComponent as Cross } from '../Icons/cross.svg';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { isDesktop } = useAdaptive();
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const handleClickMenuIcon = () => {
    setMenuIsOpen(prevState => !prevState);
  };

  useClickOutside(menuRef, () => {
    if (menuIsOpen && !isDesktop && iconRef.current) {
      setMenuIsOpen(prevState => !prevState);
    }
  });

  return (
    <Container>
      <Logo />
      <WrapperNavAndBar
        $burgerMenu={menuIsOpen}
        ref={menuIsOpen ? menuRef : null}
      >
        <WrapperNavBarIcon $burgerMenu={menuIsOpen}>
          {menuIsOpen || isDesktop ? (
            <UserNav closeMenu={handleClickMenuIcon} />
          ) : null}
          <Wrapper $burgerMenu={menuIsOpen} $isDesktop={isDesktop}>
            <UserBar burgerMenu={menuIsOpen} />
            {isDesktop && <ButtonLogOut isDesktop={true} />}
            {!isDesktop && menuIsOpen && (
              <Cross
                onClick={handleClickMenuIcon}
                className="cross"
                ref={iconRef}
              />
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
  );
};

export default Header;
