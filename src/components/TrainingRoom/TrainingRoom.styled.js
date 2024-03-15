import styled from '@emotion/styled';

export const WrapperTraining = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;

export const WrapperTranslation = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* width: 100%; */
  max-width: 343px;
  height: 195px;
  padding: 22px 22px 20px;

  border-bottom: 1px solid #dbdbdb;

  background-color: #fcfcfc;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  input {
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
  }
`;

export const ButtonNext = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;

  background-color: transparent;

  span {
    font-family: 'FixelDisplay-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;

    color: rgba(18, 20, 23, 0.5);
  }
`;

export const WrapperEnglishWord = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* width: 100%; */
  max-width: 343px;
  height: 195px;
  padding: 22px 22px 20px;

  background-color: #fcfcfc;

  .word {
    align-self: flex-start;
    font-family: 'FixelDisplay-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;

    color: #121417;
  }

  div {
    align-self: flex-end;
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
  /* .button {
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
  } */
`;
