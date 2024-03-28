import Loader from './Loader/Loader';
import MainLayout from './MainLayout/MainLayout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { Wrapper } from './App.styled';

import { refreshUser } from 'redux/auth/authOperations';
import { selectIsLoggedIn, selectToken } from 'redux/auth/authSelectors';

import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

const Register = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage/LoginPage'));
const Dictionary = lazy(() => import('../pages/DictionaryPage/DictionaryPage'));
const Recommend = lazy(() => import('../pages/RecommendPage/RecommendPage'));
const Training = lazy(() => import('../pages/TrainingPage/TrainingPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!token || !isLoggedIn) return;

    dispatch(refreshUser());
  }, [token, dispatch, isLoggedIn]);

  return (
    <Wrapper>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path={'/'}
            element={
              <PrivateRoute redirectTo="/login" component={<MainLayout />} />
            }
          >
            <Route
              path={'dictionary'}
              element={
                <PrivateRoute redirectTo="/login" component={<Dictionary />} />
              }
            />

            <Route
              path={'recommend'}
              element={
                <PrivateRoute redirectTo="/login" component={<Recommend />} />
              }
            />
            <Route
              path={'training'}
              element={
                <PrivateRoute redirectTo="/login" component={<Training />} />
              }
            />
          </Route>
          <Route
            path={'/register'}
            element={
              <RestrictedRoute redirectTo="/" component={<Register />} />
            }
          />
          <Route
            path={'/login'}
            element={<RestrictedRoute redirectTo="/" component={<Login />} />}
          />

          <Route
            path="*"
            element={
              <PrivateRoute redirectTo="/login" component={<Dictionary />} />
            }
          />
        </Routes>
      </Suspense>
    </Wrapper>
  );
};
