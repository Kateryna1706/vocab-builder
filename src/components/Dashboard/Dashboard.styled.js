import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-bottom: 32px;
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 14px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    margin-top: 28px;
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 0;
  }
`;

export const Statistics = styled.p`
  margin: 0;

  font-family: 'FixelDisplay-Medium', sans-serif;
  font-weight: 600;
  font-size: 14px;

  color: rgba(18, 20, 23, 0.5);

  span {
    font-size: 20px;
    line-height: 30px;

    color: #121417;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  svg {
    stroke: #85aa9f;
  }
`;

export const AddWordBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 0;
  border: none;

  font-family: 'FixelDisplay-Medium', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #121417;

  background-color: transparent;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: 'FixelDisplay-Medium', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #121417;
`;
