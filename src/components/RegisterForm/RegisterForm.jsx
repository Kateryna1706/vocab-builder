import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Notify } from 'notiflix';
import {
  Button,
  FormContainer,
  FormWrapper,
  Header,
  Icon,
  Label,
  Text,
  Wrapper,
} from './RegisterForm.styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const RegisterForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = event => {
    if (event?.target !== event?.currentTarget) return;
    setIsModalOpen(false);
    document.body.classList.remove('hidden');
  };

  const handleSubmit = (values, actions) => {
    const { name, email, password } = values;

    //    Notify.success('Registration completed successfully');

    //    Notify.failure(error.code);

    actions.resetForm();
    closeModal();
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
              <Icon onClick={handleClick} />
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
      <Link to="/login"></Link>
    </FormContainer>
  );
};

export default RegisterForm;
