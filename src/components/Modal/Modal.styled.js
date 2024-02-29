import styled from '@emotion/styled';
import { ReactComponent as Close } from '../Icons/close-modal.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1200;
  overflow: scroll;
`;

export const ModalWindow = styled.div`
  position: relative;
  width: 343px;
  padding: 48px 16px;
  border-radius: 15px;
  background-color: #85aa9f;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 628px;
    padding: 48px 64px;
    border-radius: 30px;
  }
`;

export const CrossClose = styled(Close)`
  position: absolute;
  top: 16px;
  right: 16px;
  stroke: #ffffff;

  cursor: pointer;

  &:hover {
    stroke: #f4c550;
  }

  @media (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;
