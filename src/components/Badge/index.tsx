import React from 'react';

import { BadgeProps } from '../../types/layout';
import { Typography } from '../Typography';
import { StyledBadge } from './styles';

export const Badge: React.FC<
  BadgeProps & React.HTMLAttributes<HTMLDivElement>
> = ({ variant, label, bordered, customStyles, secondary = false }) => {
  return (
    <StyledBadge
      variant={variant}
      customStyles={customStyles}
      bordered={bordered}
      secondary={secondary}
    >
      <Typography as="span">{label}</Typography>
    </StyledBadge>
  );
};
