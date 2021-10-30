import React from 'react';

import { palette } from '../theme/colors';
import { IconProps } from './types';

export const IconWarning: React.FC<IconProps> = ({ color, size = '16px' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="none"
        stroke={color ?? palette.colors.red}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.86 2.573L1.213 12c-.116.202-.178.43-.178.663-.001.233.06.462.175.664.115.202.281.371.482.489.2.118.429.182.661.184h11.294c.232-.002.46-.066.661-.184.2-.118.367-.287.482-.489.116-.202.176-.431.175-.664 0-.233-.062-.461-.178-.663L9.14 2.573c-.119-.195-.286-.357-.486-.47-.2-.112-.425-.171-.654-.171-.23 0-.454.059-.654.171-.2.113-.367.275-.486.47v0zM8 6v2.667M8 11.334h.007"
      />
    </svg>
  );
};
