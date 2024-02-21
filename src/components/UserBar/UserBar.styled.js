import styled from '@emotion/styled';

export const ContainerBar = styled.address`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserName = styled.span`
  font-family: 'FixelDisplay-Medium', sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;

  font-style: normal;

  color: ${props => (props.$burgerMenu ? '#fcfcfc' : '#121417')};

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  border-radius: 50%;
  background-color: ${props => (props.$burgerMenu ? '#FCFCFC' : '#85aa9f')};

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    fill: ${props => (props.$burgerMenu ? '#85AA9F' : '#fcfcfc')};
  }

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;
