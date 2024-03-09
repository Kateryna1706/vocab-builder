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

  .vector {
    position: absolute;
    top: 18px;
    right: 14px;

    fill: #ffffff;

    cursor: pointer;

    &:hover,
    &:focus {
      stroke: #85aa9f;
    }
  }

  &.categoryLabel {
    margin-bottom: ${props => (props.$isVerb ? '8px' : '58px')};

    @media (min-width: 768px) {
      width: 204px;
      max-width: 204px;

      margin-bottom: ${props => (props.$isVerb ? '8px' : '70px')};
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

export const Dropdown = styled.ul`
  box-sizing: border-box;

  position: absolute;
  z-index: 10;
  top: 48px;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 311px;
  max-height: 240px;
  overflow: auto;
  padding: 12px 24px;
  border-radius: 15px;

  background-color: #ffffff;

  @media (min-width: 768px) {
    width: 204px;
  }
`;

export const DropdownItem = styled.li`
  font-family: 'FixelDisplay-Medium', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;

  color: rgba(18, 20, 23, 0.5);

  cursor: pointer;

  &:hover,
  &:focus {
    color: #85aa9f;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  height: 18px;

  margin-bottom: ${props => (props.$isVerbIrregular ? '8px' : '32px')};

  @media (min-width: 768px) {
    height: 24px;

    margin-bottom: ${props => (props.$isVerbIrregular ? '8px' : '38px')};
  }
`;

export const RadioLabel = styled.label`
  position: relative;

  display: flex;
  align-items: center;

  cursor: pointer;

  input {
    visibility: hidden;
  }

  input:checked + div .selected {
    visibility: visible;
  }
`;

export const CustomRadioButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  width: 18px;
  height: 18px;
  border: 2px solid #fcfcfc;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const Circle = styled.div`
  box-sizing: border-box;

  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fcfcfc;
  visibility: hidden;

  @media (min-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const RadioText = styled.span`
  margin-left: 16px;

  font-size: 12px;

  color: #fcfcfc;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const IrregularText = styled.p`
  margin-bottom: 16px;
  font-size: 10px;
  line-height: 12px;
  color: #fcfcfc;

  @media (min-width: 768px) {
    font-size: 12px;
    line-height: 14px;

    color: rgba(252, 252, 252, 0.8);
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

  .add {
    width: 159px;
    height: 48px;

    /* padding: 12px 63px; */

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
