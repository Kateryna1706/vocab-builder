import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 32px;

  background-color: transparent;

  nav {
    background-color: transparent;
  }

  ul {
    gap: 10px;
    background-color: transparent;

    li button {
      margin: 0;
      border: 1px solid rgba(18, 20, 23, 0.1);
      border-radius: 8px;

      font-family: 'FixelDisplay-SemiBold', sans-serif;
      font-weight: 600;
      font-size: 13px;

      color: #121417;
    }

    li div {
      display: flex;
      justify-content: center;
      align-items: end;
      width: 32px;
      height: 32px;
      padding-bottom: 7px;
      margin: 0;
      border: 1px solid rgba(18, 20, 23, 0.1);
      border-radius: 8px;

      font-family: 'FixelDisplay-SemiBold', sans-serif;
      font-weight: 600;
      font-size: 13px;

      color: #121417;
    }

    li button svg {
      &:hover,
      &:focus {
        stroke: none;
        fill: #85aa9f;
      }
    }
  }

  @media (min-width: 768px) {
    padding-top: 28px;
  }
`;
