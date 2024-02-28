import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;

  .categoryLabel {
    margin-bottom: ${props => (props.$isVerb ? '8px' : '58px')};
  }
`;

export const Label = styled.label`
  position: relative;

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

  margin-bottom: ${props => (props.$isVerbIrregular ? '8px' : '32px')};
`;

export const RadioLabel = styled.label`
  position: relative;

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
  width: 18px;
  height: 18px;
  border: 2px solid #fcfcfc;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const Circle = styled.div`
  width: 12px;
  height: 12px;
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
    font-size: 14px;
  }
`;

export const IrregularText = styled.p`
  margin-bottom: 16px;
  font-size: 10px;
  line-height: 12px;
  color: #fcfcfc;
`;

export const WrapperTextAndIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 4.5px;

  margin-bottom: 8px;
`;

export const TextInput = styled.span`
  font-family: 'FixelDisplay-Medium', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #fcfcfc;
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

    padding: 12px 63px;

    border: none;

    color: #121417;

    background-color: #fcfcfc;

    &:hover,
    &:focus {
      color: #85aa9f;
    }
  }

  .cancel {
    width: 145px;
    height: 48px;

    padding: 12px 45px;
    border: 1px solid rgba(252, 252, 252, 0.4);

    color: #fcfcfc;
    background-color: transparent;

    &:hover,
    &:focus {
      color: #121417;
      background-color: #fcfcfc;
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
`;
