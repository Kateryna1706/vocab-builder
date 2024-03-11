import {
  Button,
  FormContainer,
  FormWrapper,
  Header,
  Label,
  Text,
  Wrapper,
  MessageError,
  MessageSuccess,
} from './RegisterForm.styled';

import { register } from 'redux/auth/authOperations';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';

import { ReactComponent as EyeOf } from '../Icons/eye-off.svg';
import { ReactComponent as Eye } from '../Icons/eye.svg';
import { ReactComponent as Error } from '../Icons/error.svg';
import { ReactComponent as Success } from '../Icons/success.svg';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const matchPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

const matchEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
    .matches(matchEmail, 'Error email'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .matches(
      matchPassword,
      'Must be at least 6 characters long and contain one uppercase letter, one lowercase letter, and one number.'
    ),
});

const RegisterForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    const { name, email, password } = values;

    dispatch(
      register({
        name,
        email,
        password,
      })
    )
      .then(data => {
        if (data.payload === 'Request failed with status code 400') {
          Notify.failure(`Bad request (invalid request body)`);
          return;
        }

        if (data.payload === 'Request failed with status code 404') {
          Notify.failure(`Service not found`);
          return;
        }

        if (data.payload === 'Request failed with status code 409') {
          Notify.failure(`Such email already exists`);
          return;
        }

        Notify.success(`Registration completed successfully.`);
        navigate('/dictionary');
      })
      .catch(error => {
        Notify.failure(error);
      });

    actions.resetForm();
  };

  const handleClick = () => {
    setVisiblePassword(prevState => !prevState);
  };

  return (
    <FormContainer>
      <Header>Register</Header>
      <Text>
        To start using our services, please fill out the registration form
        below. All fields are mandatory:
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <FormWrapper>
            <Wrapper>
              <Label>
                <Field
                  placeholder="Name"
                  name="name"
                  style={{
                    borderColor:
                      (touched.name && errors.name && '#d80027') ||
                      (touched.name && !errors.name && '#3cbf61'),
                  }}
                />
                {errors.name && touched.name && (
                  <MessageError>
                    <Error />
                    <span>{errors.name}</span>
                  </MessageError>
                )}
              </Label>
              <Label>
                <Field
                  type="email"
                  placeholder="Email"
                  name="email"
                  style={{
                    borderColor:
                      (touched.email && errors.email && '#d80027') ||
                      (touched.email && !errors.email && '#3cbf61'),
                  }}
                />
                {errors.email && touched.email && (
                  <MessageError>
                    <Error />
                    <span>{errors.email}</span>
                  </MessageError>
                )}
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
                  style={{
                    borderColor:
                      (touched.password && errors.password && '#d80027') ||
                      (touched.password && !errors.password && '#3cbf61'),
                  }}
                />
                {errors.password && touched.password && (
                  <MessageError>
                    <Error />
                    <span>{errors.password}</span>
                  </MessageError>
                )}
                {!errors.password && touched.password && (
                  <MessageSuccess>
                    <Success />
                    <span>Success password</span>
                  </MessageSuccess>
                )}
              </Label>
            </Wrapper>
            <Button type="submit">Register</Button>
          </FormWrapper>
        )}
      </Formik>
      <Link to="/login">Login</Link>
    </FormContainer>
  );
};

export default RegisterForm;
