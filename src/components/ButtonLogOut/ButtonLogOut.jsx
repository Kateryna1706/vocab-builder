import { Button } from './ButtonLogOut.styled';
import { logOut } from 'redux/auth/authOperations';

import { useDispatch } from 'react-redux';

import { ReactComponent as Switch } from '../Icons/switch-horizontal.svg';

const ButtonLogOut = ({ isDesktop }) => {
  const dispatch = useDispatch();

  const handleClickLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Button onClick={handleClickLogOut} isDesktop={isDesktop}>
      <span>Log out</span>
      <Switch />
    </Button>
  );
};

export default ButtonLogOut;
