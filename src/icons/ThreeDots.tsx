import React from 'react';

import { palette } from '../theme/colors';
import { IconProps } from './types';

export const IconThreeDots = ({ color }: IconProps): JSX.Element => {
  return (
    <svg
      width="25"
      height="19"
      viewBox="0 0 25 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.92336 10.8674C6.03683 10.8674 6.93948 9.98132 6.93948 8.88825C6.93948 7.79519 6.03683 6.90909 4.92336 6.90909C3.80988 6.90909 2.90723 7.79519 2.90723 8.88825C2.90723 9.98132 3.80988 10.8674 4.92336 10.8674Z"
        fill={color ?? palette.colors.gray.dark}
      />
      <path
        d="M11.8628 10.8674C12.9763 10.8674 13.8789 9.98132 13.8789 8.88825C13.8789 7.79519 12.9763 6.90909 11.8628 6.90909C10.7493 6.90909 9.84668 7.79519 9.84668 8.88825C9.84668 9.98132 10.7493 10.8674 11.8628 10.8674Z"
        fill={color ?? palette.colors.gray.dark}
      />
      <path
        d="M18.8013 10.8674C19.9148 10.8674 20.8174 9.98132 20.8174 8.88825C20.8174 7.79519 19.9148 6.90909 18.8013 6.90909C17.6878 6.90909 16.7852 7.79519 16.7852 8.88825C16.7852 9.98132 17.6878 10.8674 18.8013 10.8674Z"
        fill={color ?? palette.colors.gray.dark}
      />
    </svg>
  );
};
