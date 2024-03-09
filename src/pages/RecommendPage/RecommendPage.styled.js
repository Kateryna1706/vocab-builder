import styled from '@emotion/styled';

export const Container = styled.div`
  box-sizing: border-box;

  width: 100%;
  max-width: 375px;
  padding: 32px 16px 48px;

  background-color: transparent;

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

  height: 100vh;

  background-color: #f8f8f8;
`;
