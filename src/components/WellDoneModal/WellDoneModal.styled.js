import styled from '@emotion/styled';

export const Header = styled.h2`
  margin-bottom: 32px;

  font-family: 'FixelDisplay-SemiBold', sans-serif;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  letter-spacing: -0.02rem;
  text-align: center;

  color: #fcfcfc;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;

  .openBook {
    width: 152px;
    height: 121px;

    margin-top: 40px;

    @media (min-width: 768px) {
      width: 212px;
      height: 179px;
    }
  }
`;

export const ListWrapper = styled.div`
  span {
    font-size: 14px;
    color: rgba(252, 252, 252, 0.5);

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  ul li {
    font-family: 'FixelDisplay-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;

    color: #fcfcfc;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
`;
