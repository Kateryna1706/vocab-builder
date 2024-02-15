import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';
import {
  Button,
  FormContainer,
  FormWrapper,
  Header,
  Label,
  Text,
  Wrapper,
} from './RegisterForm.styled';
import { useState } from 'react';
import { register } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';
import { ReactComponent as EyeOf } from '../Icons/eye-off.svg';
import { ReactComponent as Eye } from '../Icons/eye.svg';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
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

const RegisterForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    const { name, email, password } = values;

    try {
      await dispatch(
        register({
          name,
          email,
          password,
        })
      );

      Notify.success('Registration completed successfully');
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
        <FormWrapper>
          <Wrapper>
            <Label>
              <Field placeholder="Name" name="name" />
              <ErrorMessage name="name" component="div" />
            </Label>
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
          <Button type="submit">Register</Button>
        </FormWrapper>
      </Formik>
      <Link to="/login">Login</Link>
    </FormContainer>
  );
};

export default RegisterForm;
