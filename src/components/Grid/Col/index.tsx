import React from 'react';

import { ColProps } from '../../../types/layout';
import { StyledCol } from './styles';

export const Col: React.FC<ColProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <StyledCol {...props}>{children}</StyledCol>;
};

export default Col;
