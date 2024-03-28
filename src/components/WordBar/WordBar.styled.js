import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  gap: 2px;

  span {
    font-family: 'FixelDisplay-Medium', sans-serif;
    font-weight: 600;
    font-size: 14px;

    text-align: start;

    color: #121417;

    @media (min-width: 1440px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  svg {
    stroke: #85aa9f;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    gap: 8px;

    margin: 0 auto;
  }
`;
