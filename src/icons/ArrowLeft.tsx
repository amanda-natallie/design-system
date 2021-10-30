import React from 'react';

import { palette } from '../theme/colors';
import { IconProps } from './types';

export const IconArrowLeft = ({ color }: IconProps): JSX.Element => {
  return (
    <svg
      width="48"
      height="28"
      viewBox="0 0 48 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.878629 11.8787L11.5078 1.24951C12.0937 0.663668 12.8614 0.370795 13.6292 0.370795C14.397 0.370795 15.1647 0.663669 15.7506 1.24951C16.9221 2.42111 16.9221 4.32057 15.7506 5.49217L10.2427 11L45 11C46.6568 11 48 12.3431 48 14C48 15.6568 46.6568 17 45 17L10.2427 17L15.7506 22.5078C16.9221 23.6794 16.9221 25.5789 15.7506 26.7505C14.5789 27.922 12.6795 27.922 11.5078 26.7505L0.878629 16.1213C-0.292868 14.9498 -0.292868 13.0502 0.878629 11.8787Z"
        fill={color ?? palette.colors.green}
      />
    </svg>
  );
};
