import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  width: 100%;
  max-width: 375px;
  padding: 32px 16px 48px;

  background-color: transparent;

  .bloodReport {
    width: 144px;
    height: 166px;

    @media (min-width: 768px) {
      width: 205px;
      height: 230px;
    }
  }

  @media (min-width: 768px) {
    width: 768px;
    max-width: 768px;
    padding: 80px 32px 48px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    max-width: 1440px;
    padding: 80px 100px 48px;
  }
`;

export const MainBlock = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;

  background-color: #f8f8f8;
`;

export const WrapperMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 43px;

  img {
    margin-bottom: 33px;
  }

  p:first-of-type {
    font-family: 'FixelDisplay-Medium', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    color: #121417;

    @media (min-width: 768px) {
      align-self: start;

      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
    }
  }

  p:last-of-type {
    margin-bottom: 132px;

    font-family: 'FixelDisplay-Regular', sans-serif;
    font-weight: 400;
    font-size: 14px;

    color: #121417;

    @media (min-width: 768px) {
      margin-bottom: 64px;

      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (min-width: 768px) {
    padding-top: 60px;

    .wrapperText {
      width: 581px;
    }
  }

  @media (min-width: 1440px) {
    flex-direction: row-reverse;

    padding-top: 113px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  width: 100%;

  .button {
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
  }

  .add {
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

    width: 581px;
  }
`;

// export const Button = styled.button`
//   width: 100%;
//   max-width: 343px;
//   min-width: 271px;

//   padding: 0;
//   border: none;

//   box-sizing: border-box;

//   font-family: 'FixelDisplay-Bold', sans-serif;
//   font-size: 16px;
//   line-height: 24px;
//   font-weight: 700;

//   @media (min-width: 768px) {
//     width: 215px;
//     max-width: 215px;
//     min-width: 215px;

//     font-size: 18px;
//     line-height: 28px;
//   }
// `;
