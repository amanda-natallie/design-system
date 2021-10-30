import React from 'react';

import { DividerProps } from '../../types/layout';
import { StyledDivider } from './styles';

export const Divider: React.FC<DividerProps> = ({
  margin,
  borderColor,
  fullWidth,
  customStyles,
}) => {
  return (
    <StyledDivider
      margin={margin}
      customStyles={customStyles}
      borderColor={borderColor}
      fullWidth={fullWidth}
    />
  );
};
