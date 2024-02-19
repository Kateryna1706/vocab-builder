import { NavLink } from 'react-router-dom';
import { ListNav, ListNavItem } from './UserNav.styled';

const UserNav = () => {
  return (
    <nav>
      <ListNav>
        <ListNavItem>
          <NavLink to="/dictionary">Dictionary</NavLink>
        </ListNavItem>
        <ListNavItem>
          <NavLink to="/recommend">Recommend</NavLink>
        </ListNavItem>
        <ListNavItem>
          <NavLink to="/training">Training</NavLink>
        </ListNavItem>
      </ListNav>
    </nav>
  );
};

export default UserNav;
