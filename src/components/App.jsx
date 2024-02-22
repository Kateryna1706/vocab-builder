import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import { refreshUser } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoggedIn,
  selectToken,
} from 'redux/auth/authSelectors';
import Loader from './Loader/Loader';
import { Notify } from 'notiflix';

const Register = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage/LoginPage'));
const Dictionary = lazy(() => import('../pages/DictionaryPage/DictionaryPage'));
const Recommend = lazy(() => import('../pages/RecommendPage/RecommendPage'));
const Training = lazy(() => import('../pages/TrainingPage/TrainingPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!token || isLoggedIn) return;

    dispatch(refreshUser());
  }, [token, dispatch, isLoggedIn]);

  useEffect(() => {
    if (!error) return;
    Notify.failure(error);
  }, [error]);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route path={'dictionary'} element={<Dictionary />} />
            <Route path={'recommend'} element={<Recommend />} />
            <Route path={'training'} element={<Training />} />
          </Route>
          <Route path={'/register'} element={<Register />} />
          <Route path={'/login'} element={<Login />} />

          <Route path="*" element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
};
