import { ListNav, ListNavItem } from './UserNav.styled';
import { changeFilter } from 'redux/words/filterSlice';

import { useDispatch } from 'react-redux';
import { useAdaptive } from 'hooks/useAdaptive';

import { NavLink } from 'react-router-dom';
import ButtonLogOut from 'components/ButtonLogOut/ButtonLogOut';

const UserNav = ({ closeMenu }) => {
  const dispatch = useDispatch();
  const { isDesktop } = useAdaptive();

  const handleClickNavItem = () => {
    if (isDesktop) {
      return;
    }

    dispatch(changeFilter(1));
    closeMenu();
  };

  return (
    <nav>
      <ListNav>
        <ListNavItem>
          <NavLink to="/dictionary" onClick={handleClickNavItem}>
            Dictionary
          </NavLink>
        </ListNavItem>
        <ListNavItem>
          <NavLink to="/recommend" onClick={handleClickNavItem}>
            Recommend
          </NavLink>
        </ListNavItem>
        <ListNavItem>
          <NavLink to="/training" onClick={handleClickNavItem}>
            Training
          </NavLink>
        </ListNavItem>
      </ListNav>
      {!isDesktop && <ButtonLogOut isDesktop={false} />}
    </nav>
  );
};

export default UserNav;
