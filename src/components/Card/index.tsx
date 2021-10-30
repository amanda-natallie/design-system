import React from 'react';

import { CardProps } from '../../types/layout';
import { StyledCard } from './styles';

export const Card: React.FC<CardProps> = ({
  children,
  customStyles,
  ...props
}): JSX.Element => {
  return (
    <StyledCard isCard customStyles={customStyles} {...props}>
      {children}
    </StyledCard>
  );
};
