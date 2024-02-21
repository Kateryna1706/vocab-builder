import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { ReactComponent as User } from '../Icons/user.svg';
import { Avatar, ContainerBar, UserName } from './UserBar.styled';

const UserBar = ({ burgerMenu }) => {
  const user = useSelector(selectUser);

  return (
    <ContainerBar>
      <UserName $burgerMenu={burgerMenu}>{user.name}</UserName>
      <Avatar $burgerMenu={burgerMenu}>
        <User />
      </Avatar>
    </ContainerBar>
  );
};

export default UserBar;
