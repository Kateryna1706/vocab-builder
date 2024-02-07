import { NavLink } from 'react-router-dom';

const UserNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/dictionary">Dictionary</NavLink>
        </li>
        <li>
          <NavLink to="/recommend">Recommend</NavLink>
        </li>
        <li>
          <NavLink to="/training">Training</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
