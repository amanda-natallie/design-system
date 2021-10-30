import React from 'react';

import { palette } from '../theme/colors';
import { IconProps } from './types';

export const IconCalendar = ({ color }: IconProps): JSX.Element => {
  return (
    <svg
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.13728 2.5H17.9961C18.5645 2.5 19.1096 2.71071 19.5115 3.08579C19.9134 3.46086 20.1392 3.96957 20.1392 4.5V16.49C20.1392 17.0204 19.9134 17.5291 19.5115 17.9042C19.1096 18.2793 18.5645 18.49 17.9961 18.49H5.13728C4.56888 18.49 4.02377 18.2793 3.62185 17.9042C3.21993 17.5291 2.99414 17.0204 2.99414 16.49V4.5C2.99414 3.96957 3.21993 3.46086 3.62185 3.08579C4.02377 2.71071 4.56888 2.5 5.13728 2.5V2.5Z"
          stroke={color ?? palette.colors.gray.darker}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M3.16406 6.5H20.1388"
          stroke={color ?? palette.colors.gray.darker}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.6198 13.155V12.076H8.56278C9.27859 12.076 9.76508 11.681 9.76508 11.104C9.76508 10.577 9.32038 10.177 8.58314 10.177C7.81911 10.177 7.34869 10.543 7.29618 11.173H5.83456C5.88921 9.874 6.96078 9 8.66136 9C10.3362 9 11.2674 9.864 11.2621 10.895C11.2567 11.749 10.6813 12.311 9.87009 12.496V12.589C10.9213 12.73 11.56 13.355 11.56 14.298C11.56 15.533 10.3148 16.408 8.60885 16.408C6.90292 16.408 5.74134 15.537 5.67383 14.204H7.18581C7.23296 14.8 7.77732 15.181 8.58849 15.181C9.38896 15.181 9.94939 14.775 9.94939 14.165C9.94939 13.54 9.42539 13.155 8.57778 13.155H7.6198Z"
          stroke={color ?? palette.colors.gray.darker}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.7995 16.2272V10.6162H14.7063L12.8535 11.8082V10.4362L14.8048 9.18115H16.38V16.2272H14.7995Z"
          stroke={color ?? palette.colors.gray.darker}
        />
      </g>
    </svg>
  );
};
