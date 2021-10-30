import React from 'react';

import { TypographyProps } from '../../types/layout';
import StyledTypography from './styles';

export const Typography: React.FC<TypographyProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <StyledTypography {...props}>{children}</StyledTypography>;
};
