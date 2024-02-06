import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Register = lazy(() => import('pages/RegisterPage'));
const Login = lazy(() => import('pages/LoginPage'));
const Dictionary = lazy(() => import('pages/DictionaryPage'));
const Recommend = lazy(() => import('pages/RecommendPage'));
const Training = lazy(() => import('pages/TrainingPage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/register'} component={Register}></Route>
          <Route path={'/login'} component={Login}></Route>
          <Route path={'/dictionary'} component={Dictionary}></Route>
          <Route path={'/recommend'} component={Recommend}></Route>
          <Route path={'/training'} component={Training}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
