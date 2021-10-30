import React from 'react';

import { ButtonProps } from '../../types/layout';
import { StyledButton, StyledGhostButton } from './styles';

export const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  return props.ghost ? (
    <StyledGhostButton {...props}>{props.children}</StyledGhostButton>
  ) : (
    <StyledButton {...props}>{props.children}</StyledButton>
  );
};
