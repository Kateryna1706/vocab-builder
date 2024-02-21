import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  height: 100vh;

  .illustration {
    width: 247px;
    height: 191px;

    @media (min-width: 768px) and (max-width: 1439px) {
      display: none;
    }

    @media (min-width: 1440px) {
      width: 498px;
      height: 475px;
    }
  }

  @media (min-width: 768px) {
    gap: 140px;
    height: auto;
  }

  @media (min-width: 1440px) {
    gap: 64px;
  }
`;

export const Position = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex-grow: 3;

  @media (min-width: 768px) {
    flex-direction: column-reverse;
    gap: 98px;
  }

  @media (min-width: 1440px) {
    flex-direction: row-reverse;
    gap: 80px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const List = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 10px;

    font-size: 16px;
    line-height: 24px;
    color: rgba(18, 20, 23, 0.8);
  }
`;
