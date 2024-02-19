import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: auto;

  span {
    font-family: 'FixelDisplay-SemiBold', sans-serif;
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 22px;
      line-height: 32px;
    }
  }

  /* @media (min-width: 768px) {
    margin-bottom: 140px;
  } */
`;
