import styled from '@emotion/styled';

export const ContainerHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px;

  svg {
    cursor: pointer;
  }
`;

export const WrapperNavAndBar = styled.div`
  position: ${props => (props.$burgerMenu ? 'fixed' : 'static')};
  top: 0;
  right: 0;

  display: flex;
  flex-direction: ${props => (props.$burgerMenu ? 'column' : 'row')};
  justify-content: ${props => (props.$burgerMenu ? 'start' : 'start')};
  gap: ${props => (props.$burgerMenu ? '139px' : '0')};

  height: ${props => (props.$burgerMenu ? '100vh' : 'auto')};
  width: ${props => (props.$burgerMenu ? '185px' : 'auto')};

  background-color: ${props => (props.$burgerMenu ? '#85AA9F' : '#FFFFFF')};

  .illustration {
    width: 363px;
    height: 318px;

    @media (min-width: 768px) and (max-width: 1439px) {
      
    }

    /* @media (min-width: 1440px) {
      width: 498px;
      height: 475px;
    } */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.$burgerMenu ? 'column-reverse' : 'row')};
  justify-content: ${props => (props.$burgerMenu ? 'start' : 'start')};
  gap: ${props => (props.$burgerMenu ? '166px' : '0')};
  padding: ${props => (props.$burgerMenu ? '16px' : '0')};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => (props.$burgerMenu ? '0' : '8px')};
`;
