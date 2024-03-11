import styled from '@emotion/styled';

export const ContextMenu = styled.ul`
  position: absolute;
  top: 42px;
  right: 0;

  z-index: 10;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;

  width: 117px;
  height: 70px;
  padding: 12px 24px;
  border-radius: 15px;
  background-color: #ffffff;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (min-width: 768px) {
    width: 124px;
  }
`;

export const ContextMenuItem = styled.li`
  display: flex;

  align-items: center;
  gap: 8px;

  span {
    font-family: 'FixelDisplay-Medium', sans-serif;
    font-weight: 600;
    font-size: 14px;

    color: #121417;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  svg {
    width: 16px;
    height: 17px;

    stroke: rgba(18, 20, 23, 0.5);

    &:hover,
    &:focus {
      stroke: #85aa9f;
    }
  }
`;
