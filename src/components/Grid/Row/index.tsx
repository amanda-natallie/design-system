import React from 'react';

import { RowProps } from '../../../types/layout';
import { StyledRow } from './styles';

export const Row: React.FC<RowProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <StyledRow {...props}>{children}</StyledRow>;
};

export default Row;
