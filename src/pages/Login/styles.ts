import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImage from '../../assets/background_login.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  img {
    color: #333;
    width: 200px;
  }

  form {
    margin: 16px 0;
    width: 340px;
    text-align: center;
    font-size: 12px;

    h1 {
      margin-bottom: 24px;
    }

    button {
      margin-top: 24px;
      height: 48px;
      border-radius: 4px;
      border: 0;
      padding: 0 16px;
      width: 160px;
      background-color: #3f3d56;
      font-weight: bold;
      color: #F0F2F5;

      &:hover {
        background-color: ${shade(0.2, '#3f3d56')}
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImage}) no-repeat center;
  background-size: 500px 500px;

`;
