import React from 'react';

import { palette } from '../theme/colors';
import { IconProps } from './types';

export const IconEyeShow = ({ color }: IconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke={color ?? palette.colors.gray.light}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      />
      <path
        fill="none"
        stroke={color ?? palette.colors.gray.light}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 15c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
      />
    </svg>
  );
};

export default IconEyeShow;
