import styled from '@emotion/styled';

export const Container = styled.header`
  box-sizing: border-box;

  position: relative;
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 375px;
  padding: 16px 16px;

  background-color: #ffffff;

  @media (min-width: 768px) {
    width: 768px;
    max-width: 768px;
    padding: 20px 32px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    max-width: 1440px;
    padding: 20px 100px;
  }
`;

export const WrapperNavAndBar = styled.div`
  position: ${props => (props.$burgerMenu ? 'fixed' : 'static')};
  top: 0;
  right: 0;

  z-index: 12;

  display: flex;
  flex-direction: ${props => (props.$burgerMenu ? 'column' : 'row')};
  justify-content: space-between;

  height: ${props => (props.$burgerMenu ? '100vh' : 'auto')};
  width: ${props => (props.$burgerMenu ? '185px' : 'auto')};

  background-color: ${props => (props.$burgerMenu ? '#85AA9F' : '#FFFFFF')};

  .illustration {
    width: 363px;
    height: 318px;

    @media (min-width: 768px) and (max-width: 1439px) {
      width: 498px;
      height: 435px;
    }
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    width: ${props => (props.$burgerMenu ? '300px' : 'auto')};
  }
`;

export const WrapperNavBarIcon = styled.div`
  display: flex;
  flex-direction: ${props => (props.$burgerMenu ? 'column-reverse' : 'row')};
  justify-content: ${props => (props.$burgerMenu ? 'start' : 'start')};
  gap: ${props => (props.$burgerMenu ? '166px' : '0')};
  padding: ${props => (props.$burgerMenu ? '16px' : '0')};

  @media (min-width: 1440px) {
    gap: 303px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => (props.$burgerMenu ? '0' : '8px')};

  .cross {
    width: 32px;
    height: 32px;

    stroke: #fcfcfc;

    cursor: pointer;

    @media (min-width: 768px) and (max-width: 1439px) {
      width: 40px;
      height: 40px;
    }
  }

  .menu {
    width: 32px;
    height: 22px;

    stroke: #121417;

    cursor: pointer;

    @media (min-width: 768px) and (max-width: 1439px) {
      width: 40px;
      height: 28px;
    }
  }

  @media (min-width: 768px) {
    gap: ${props => (props.$burgerMenu ? '0' : '28px')};
  }
`;
