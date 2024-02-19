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
    fill: ${props => (props.$burgerMenu ? '#85AA9F' : '#fcfcfc')};
  }
`;
