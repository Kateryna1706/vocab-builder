import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';

const Register = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const Login = lazy(() => import('../pages/LoginPage/LoginPage'));
const Dictionary = lazy(() => import('../pages/DictionaryPage/DictionaryPage'));
const Recommend = lazy(() => import('../pages/RecommendPage/RecommendPage'));
const Training = lazy(() => import('../pages/TrainingPage/TrainingPage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
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
