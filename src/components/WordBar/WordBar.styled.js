import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;

  span {
    font-family: 'FixelDisplay-Medium', sans-serif;
    font-weight: 600;
    font-size: 14px;

    color: #121417;

    @media (min-width: 1440px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 8px;
  }
`;
