import styled from '@emotion/styled';

import { Form } from 'formik';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  flex-grow: 3;
  box-sizing: border-box;
  width: 100%;
  max-width: 375px;
  padding: 32px 16px;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  background-color: rgba(133, 170, 159, 0.1);

  a {
    margin-top: 16px;

    font-family: 'FixelDisplay-Bold', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;

    color: rgba(18, 20, 23, 0.5);
    text-align: center;
    text-decoration: underline;

    &:hover,
    &:focus {
      color: #121417;
    }
  }

  @media (min-width: 768px) {
    flex-grow: 0;
    width: 628px;
    max-width: 628px;
    padding: 48px 64px;
    border-radius: 30px;
  }
`;

export const Header = styled.h1`
  margin: 0;
  margin-bottom: 16px;
  font-family: 'FixelDisplay-Bold', sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.02em;

  color: #121417;

  @media (min-width: 768px) {
    margin-bottom: 20px;

    font-size: 40px;
    line-height: 48px;
  }
`;

export const Text = styled.p`
  margin: 0 0 16px 0;
  font-size: 16px;
  line-height: 24px;

  color: rgba(18, 20, 23, 0.8);

  @media (min-width: 768px) {
    margin-bottom: 32px;

    font-size: 20px;
    line-height: 30px;
  }
`;

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 18px;
  }
`;

export const Label = styled.label`
  &:last-of-type {
    position: relative;
  }

  input {
    box-sizing: border-box;
    height: 56px;
    width: 100%;
    padding: 16px 18px;
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 15px;

    background-color: transparent;

    &::placeholder {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;

      color: #121417;
    }

    &:hover,
    &:focus {
      outline-color: #85aa9f;
    }

    &:valid {
      border: 1px solid #3cbf61;
    }

    &:invalid {
      border: 1px solid #d80027;
    }
  }

  .icon {
    position: absolute;
    top: 18px;
    right: 18px;

    height: 24px;
    width: 24px;

    stroke: #121417;
    cursor: pointer;

    &:hover {
      stroke: #f4c550;
    }
  }
`;

export const Button = styled.button`
  padding: 16px;
  margin-top: 32px;
  border: none;
  border-radius: 30px;

  font-family: 'FixelDisplay-Bold', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  word-spacing: 18px;

  color: #fcfcfc;

  background-color: #85aa9f;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #a5c0b8;
  }
`;
