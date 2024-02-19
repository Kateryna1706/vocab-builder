import styled from '@emotion/styled';

export const ListNav = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 28px;
`;

export const ListNavItem = styled.li`
  a {
    display: inline-block;
    font-family: 'FixelDisplay-Medium', sans-serif;
    font-size: 14px;
    font-weight: 500;

    color: #fcfcfc;

    &.active {
      padding: 12px 20px;
      border-radius: 15px;

      color: #121417;

      background-color: #fcfcfc;
    }
  }
`;
