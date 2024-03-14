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

  .progressColumn {
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

export const Message = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 100px;

  text-align: center;
  font-size: 40px;

  color: #85aa9f;
`;
