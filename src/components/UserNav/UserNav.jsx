import { NavLink } from 'react-router-dom';
import { ListNav, ListNavItem } from './UserNav.styled';

const UserNav = ({ closeMenu }) => {
  return (
    <nav>
      <ListNav>
        <ListNavItem>
          <NavLink to="/dictionary" onClick={closeMenu}>
            Dictionary
          </NavLink>
        </ListNavItem>
        <ListNavItem>
          <NavLink to="/recommend" onClick={closeMenu}>
            Recommend
          </NavLink>
        </ListNavItem>
        <ListNavItem>
          <NavLink to="/training" onClick={closeMenu}>
            Training
          </NavLink>
        </ListNavItem>
      </ListNav>
    </nav>
  );
};

export default UserNav;
