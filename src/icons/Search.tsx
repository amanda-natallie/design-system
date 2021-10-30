import React from 'react';

import { palette } from '../theme/colors';
import { IconProps } from './types';

export const IconSearch = ({ color }: IconProps): JSX.Element => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.58268 16C10.2837 15.9996 11.9357 15.4054 13.2756 14.312L17.4885 18.708L18.8436 17.294L14.6307 12.898C15.6791 11.4997 16.2489 9.77544 16.2493 8C16.2493 3.589 12.8099 0 8.58268 0C4.35547 0 0.916016 3.589 0.916016 8C0.916016 12.411 4.35547 16 8.58268 16ZM8.58268 2C11.7538 2 14.3327 4.691 14.3327 8C14.3327 11.309 11.7538 14 8.58268 14C5.41156 14 2.83268 11.309 2.83268 8C2.83268 4.691 5.41156 2 8.58268 2Z"
        fill={color ?? palette.colors.gray.darkest}
      />
    </svg>
  );
};
