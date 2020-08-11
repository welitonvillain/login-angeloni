import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #cfcce0;
  border: 1.6px solid transparent;
  border-radius: 4px;
  padding: 16px;
  width: 100%;
  color: #8881b1;
  cursor: pointer;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 12px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #3f3d56;
      border-color: #3f3d56;
    `
  }

  ${(props) =>
    props.isFilled &&
    css`
      color: #3f3d56;
    `
  }

  input {
    flex: 1;
    background-color: transparent;
    border: 0;

    &::placeholder {
      color: #666;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;

  svg {
    margin: 0;
  }

  span {
    background-color: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
