import styled from '@emotion/styled';

export const TableContainer = styled.div`
  table {
    box-sizing: border-box;
    width: 100%;
    border: none;
    border-radius: 15px;
    border-collapse: collapse;

    background-color: #fcfcfc;

    @media (min-width: 768px) {
      border: 18px solid #ffffff;
    }
  }

  .progress {
    font-family: 'FixelDisplay-Medium', sans-serif;
    font-weight: 600;
    font-size: 18px;

    color: #121417;

    @media (min-width: 1440px) {
      font-size: 22px;
    }
  }

  .wrapper-th {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  thead {
    box-sizing: border-box;
    background-color: rgba(133, 170, 159, 0.1);
  }

  td {
    box-sizing: border-box;
    position: relative;
    padding: 16px 14px;
    border-bottom: 1px solid lightgray;

    font-family: 'FixelDisplay-Medium', sans-serif;
    font-weight: 600;
    font-size: 14px;

    color: #121417;

    &:not(:last-of-type) {
      border-right: 1px solid lightgray;
    }

    svg {
      cursor: pointer;
    }

    button {
      padding: 0;
      border: none;

      background-color: transparent;
    }

    @media (min-width: 768px) {
      padding: 20px;
      font-size: 18px;
    }

    @media (min-width: 1440px) {
      font-size: 20px;
    }
  }

  th {
    box-sizing: border-box;
    padding: 16px 14px;
    border-bottom: 1px solid lightgray;

    font-family: 'FixelDisplay-Medium', sans-serif;
    font-weight: 600;
    font-size: 16px;
    text-align: start;

    color: #121417;

    &:not(:last-of-type) {
      border-bottom: 1px solid lightgray;
      border-right: 1px solid lightgray;
    }

    .ukraine {
      margin-left: 10px;
    }

    @media (min-width: 768px) {
      padding: 20px;
      font-size: 18px;
    }

    @media (min-width: 1440px) {
      font-size: 20px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;

  span {
    font-family: 'FixelDisplay-Medium', sans-serif;
    font-weight: 600;
    font-size: 14px;

    color: #121417;

    @media (min-width: 1440px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 8px;
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (min-width: 1440px) {
    justify-content: start;
  }
`;

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
