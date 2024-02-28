import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;

  @media (max-width: 767px) {
    padding-bottom: ${props => props.$isVerb && '26px'};
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Label = styled.label`
  position: relative;

  input {
    box-sizing: border-box;
    width: 100%;
    max-width: 343px;
    height: 48px;
    padding: 12px 24px;
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 15px;

    font-family: 'FixelDisplay-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;

    color: #121417;

    background-color: transparent;

    &:hover,
    &:focus {
      outline-color: #85aa9f;
    }
  }

  svg {
    position: absolute;

    stroke: #121417;

    cursor: pointer;

    &:hover,
    &:focus {
      stroke: #85aa9f;
    }
  }

  .word {
    top: 14px;
    right: 14px;
  }

  .category {
    top: 20px;
    right: 14px;
  }

  .categoryInput {
    @media (min-width: 768px) {
      width: 164px;
      max-width: 164px;
    }
  }

  .wordInput {
    @media (min-width: 768px) {
      width: 274px;
      max-width: 274px;
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

  width: 343px;
  max-height: 368px;
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

  color: #121417;

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
`;

export const RadioLabel = styled.label`
  position: relative;

  cursor: pointer;

  input {
    visibility: hidden;
  }

  input:checked + div {
    border: 2px solid #85aa9f;
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
  border: 2px solid rgba(18, 20, 23, 0.1);
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
  background-color: #85aa9f;
  visibility: hidden;

  @media (min-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const RadioText = styled.span`
  margin-left: 18px;

  font-size: 12px;

  color: #121417;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
