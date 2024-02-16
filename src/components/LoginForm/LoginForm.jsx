import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

import { useState } from 'react';
import { logIn } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';
import { ReactComponent as EyeOf } from '../Icons/eye-off.svg';
import { ReactComponent as Eye } from '../Icons/eye.svg';
import { ReactComponent as Error } from '../Icons/error.svg';
import { ReactComponent as Success } from '../Icons/success.svg';
import {
  Button,
  FormContainer,
  FormWrapper,
  Header,
  Label,
  MessageError,
  MessageSuccess,
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

    dispatch(
      logIn({
        email,
        password,
      })
    )
      .then(data => {
        switch (data.payload) {
          case 'Request failed with status code 400':
            Notify.failure(`Bad request (invalid request body)`);
            break;
          case 'Request failed with status code 401':
            Notify.failure(`Email or password invalid`);
            break;

          case 'Request failed with status code 404':
            Notify.failure(`Service not found`);
            break;
          default:
            Notify.success(`Login completed successfully.`);
        }
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
      <Header>Login</Header>
      <Text>
        Please enter your login details to continue using our service:
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
            <Button type="submit">Login</Button>
          </FormWrapper>
        )}
      </Formik>
      <Link to="/register">Register</Link>
    </FormContainer>
  );
};

export default LoginForm;
