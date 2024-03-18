import styled from '@emotion/styled';

export const WrapperTraining = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  margin-top: 8px;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    border: 18px solid #ffffff;
    border-radius: 15px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const WrapperTranslation = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;

  max-width: 343px;
  height: 195px;
  padding: 22px 22px 20px;

  border-bottom: 1px solid #dbdbdb;

  background-color: #fcfcfc;

  .position {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  input {
    width: 100%;
    border-color: transparent;

    outline: none;

    font-family: 'FixelDisplay-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;

    color: #121417;
    background-color: transparent;

    &:hover,
    &:focus {
      border-bottom: 2px solid #85aa9f;
    }

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 30px;
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    max-width: 668px;
    height: 282px;
  }

  @media (min-width: 1440px) {
    width: 50%;
    height: 302px;

    border-bottom: none;
    border-right: 1px solid #dbdbdb;
  }
`;

export const ButtonNext = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  border: none;

  background-color: transparent;

  span {
    font-family: 'FixelDisplay-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;

    color: rgba(18, 20, 23, 0.5);
  }

  &:hover span,
  &:focus span {
    color: #85aa9f;
  }
`;

export const WrapperEnglishWord = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;

  max-width: 343px;
  height: 195px;
  padding: 22px 22px 20px;

  background-color: #fcfcfc;

  .word {
    font-family: 'FixelDisplay-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;

    color: #121417;

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 30px;
    }
  }

  @media (min-width: 768px) {
    width: 668px;
    max-width: 668px;
    height: 282px;
  }

  @media (min-width: 1440px) {
    width: 50%;
    height: 302px;
  }
`;

export const WrapperTextAndIcon = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 8px;

  @media (min-width: 768px) {
    align-self: flex-start;
  }
`;

export const TextIcon = styled.span`
  font-family: 'FixelDisplay-Medium', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #121417;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  width: 100%;

  margin-top: 116px;

  .save {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 56px;
    border-radius: 30px;

    color: #fcfcfc;
    background-color: #85aa9f;

    &:hover,
    &:focus {
      background-color: #a5c0b8;
    }
  }

  .cancel {
    height: 22px;

    color: rgba(18, 20, 23, 0.5);
    background-color: transparent;

    &:hover,
    &:focus {
      color: #85aa9f;
    }

    @media (min-width: 768px) {
      height: 56px;

      border-radius: 30px;
      border: 1px solid #85aa9f;

      color: #85aa9f;
      background-color: transparent;

      &:hover,
      &:focus {
        color: #fcfcfc;
        background-color: #85aa9f;
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;

    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    margin-top: 80px;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 343px;
  min-width: 271px;

  padding: 0;
  border: none;

  box-sizing: border-box;

  font-family: 'FixelDisplay-Bold', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;

  @media (min-width: 768px) {
    width: 215px;
    max-width: 215px;
    min-width: 215px;

    font-size: 18px;
    line-height: 28px;
  }
`;
