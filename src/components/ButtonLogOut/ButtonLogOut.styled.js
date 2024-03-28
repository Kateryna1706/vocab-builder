import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;

  padding: 0;
  margin-top: ${props => !props.isDesktop && '28px'};
  border: none;

  background-color: transparent;

  span {
    font-family: 'FixelDisplay-Medium', sans-serif;
    font-size: 14px;
    font-weight: 600;

    color: ${props => (props.isDesktop ? '#121417' : '#fcfcfc')};
  }

  svg {
    /* fill: #fcfcfc; */
    stroke: ${props => (props.isDesktop ? '#121417' : '#fcfcfc')};
  }
`;
