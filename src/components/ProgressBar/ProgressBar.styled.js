import styled from '@emotion/styled';

export const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  .progress {
    font-family: 'FixelDisplay-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;

    color: #121417;
  }

  @media (min-width: 1440px) {
    justify-content: start;
  }
`;
