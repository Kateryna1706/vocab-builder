import Header from 'components/Header/Header';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const MainLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/recommend' || pathname === '/training') return;
    navigate('/dictionary');
  }, [navigate, pathname]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
