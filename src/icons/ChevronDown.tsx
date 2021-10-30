import React from 'react';

import { palette } from '../theme/colors';
import { IconProps } from './types';

export const IconChevronDown = ({ color }: IconProps): JSX.Element => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.724 0.390656L7.99996 6.11466L2.27596 0.390656L0.390625 2.27599L7.99996 9.88532L15.6093 2.27599L13.724 0.390656Z"
        fill={color ?? palette.colors.red}
      />
    </svg>
  );
};
