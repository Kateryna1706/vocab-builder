import styled from '@emotion/styled';

export const Header = styled.h2`
  margin-bottom: 16px;

  font-family: 'FixelDisplay-Bold', sans-serif;
  color: #fcfcfc;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const Text = styled.p`
  margin-bottom: 16px;

  font-size: 16px;
  line-height: 24px;
  color: #fcfcfc;

  @media (min-width: 768px) {
    margin-bottom: 32px;

    font-size: 20px;
    line-height: 30px;

    color: rgba(252, 252, 252, 0.8);
  }
`;
