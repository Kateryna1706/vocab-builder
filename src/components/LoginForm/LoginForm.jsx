import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

import { useState } from 'react';
import { logIn } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';
import { ReactComponent as EyeOf } from '../Icons/eye-off.svg';
import { ReactComponent as Eye } from '../Icons/eye.svg';
import {
  Button,
  FormContainer,
  FormWrapper,
  Header,
  Label,
  Text,
  Wrapper,
} from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Error email'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/, 'Error password'),
});

const LoginForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    const { email, password } = values;

    try {
      await dispatch(
        logIn({
          email,
          password,
        })
      );

      Notify.success('Login completed successfully');
    } catch (error) {
      Notify.failure(error);
    }

    actions.resetForm();
  };

  const handleClick = () => {
    setVisiblePassword(prevState => !prevState);
  };

  return (
    <FormContainer>
      <Header>Login</Header>
      <Text>
        Please enter your login details to continue using our service:
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <FormWrapper>
          <Wrapper>
            <Label>
              <Field type="email" placeholder="Email" name="email" />
              <ErrorMessage name="email" component="div" />
            </Label>
            <Label>
              {visiblePassword ? (
                <Eye className="icon" onClick={handleClick} />
              ) : (
                <EyeOf className="icon" onClick={handleClick} />
              )}
              <Field
                type={visiblePassword ? 'text' : 'password'}
                placeholder="Password"
                name="password"
              />
              <ErrorMessage name="password" component="div" />
            </Label>
          </Wrapper>
          <Button type="submit">Login</Button>
        </FormWrapper>
      </Formik>
      <Link to="/register">Register</Link>
    </FormContainer>
  );
};

export default LoginForm;
