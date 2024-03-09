import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;

  input {
    box-sizing: border-box;
    width: 100%;
    max-width: 311px;
    height: 48px;
    padding: 12px 24px;
    border: 1px solid #d1d5db;
    border-radius: 15px;

    font-family: 'FixelDisplay-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;

    color: #fcfcfc;

    background-color: transparent;

    &:hover,
    &:focus {
      outline-color: #85aa9f;
    }
  }

  &.wordLabel {
    @media (min-width: 768px) {
      flex-direction: row-reverse;
      justify-content: start;
      gap: 32px;
    }
  }

  .wordInput {
    @media (min-width: 768px) {
      width: 354px;
      max-width: 354px;
      height: 56px;
    }
  }
`;

export const MessageError = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;

  margin-top: 4px;

  span {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.1rem;
    color: #d80027;
  }
`;

export const MessageSuccess = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;

  margin-top: 4px;

  span {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.1rem;
    color: #3cbf61;
  }
`;

export const WrapperTextAndIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const TextInput = styled.span`
  font-family: 'FixelDisplay-Medium', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #fcfcfc;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: 32px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;

  .save {
    width: 159px;
    height: 48px;

    border: none;

    color: #121417;

    background-color: #fcfcfc;

    &:hover,
    &:focus {
      color: #85aa9f;
    }

    @media (min-width: 768px) {
      width: 245px;
      height: 56px;
    }
  }

  .cancel {
    width: 145px;
    height: 48px;

    /* padding: 12px 45px; */
    border: 1px solid rgba(252, 252, 252, 0.4);

    color: #fcfcfc;
    background-color: transparent;

    &:hover,
    &:focus {
      color: #121417;
      background-color: #fcfcfc;
    }

    @media (min-width: 768px) {
      width: 245px;
      height: 56px;
    }
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  border-radius: 30px;

  font-family: 'FixelDisplay-Bold', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
