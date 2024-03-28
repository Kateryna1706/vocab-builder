import styled from '@emotion/styled';

export const Wrapper = styled.div`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: auto;

  padding: ${props => props.$hasPadding && '16px 16px 0'};

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

  img {
    width: 36px;
    height: 36px;

    @media (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }

  @media (min-width: 768px) {
    padding: ${props => props.$hasPadding && '24px 32px 0'};
  }

  @media (min-width: 1440px) {
    padding: ${props => props.$hasPadding && '24px 100px 0'};
  }
`;
