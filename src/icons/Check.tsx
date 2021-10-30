import React from 'react';

import { palette } from '../theme/colors';
import { IconProps } from './types';

export const IconCheck = ({ color }: IconProps): JSX.Element => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        d="M4.86133 12L10.8613 18L20.8613 6"
        stroke={color ?? palette.colors.green}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
