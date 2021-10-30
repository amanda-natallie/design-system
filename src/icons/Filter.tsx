import React from 'react';

import { palette } from '../theme/colors';
import { IconProps } from './types';

export const IconFilter = ({ color }: IconProps): JSX.Element => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4H12C12 4.53043 12.2107 5.03914 12.5858 5.41421C12.9609 5.78929 13.4696 6 14 6H16C16.5304 6 17.0391 5.78929 17.4142 5.41421C17.7893 5.03914 18 4.53043 18 4H19C19.2652 4 19.5196 3.89464 19.7071 3.70711C19.8946 3.51957 20 3.26522 20 3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2H18C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210713 16.5304 -2.38419e-07 16 -2.38419e-07H14C13.4696 -2.38419e-07 12.9609 0.210713 12.5858 0.585786C12.2107 0.960859 12 1.46957 12 2H1C0.734784 2 0.48043 2.10536 0.292893 2.29289C0.105357 2.48043 0 2.73478 0 3C0 3.26522 0.105357 3.51957 0.292893 3.70711C0.48043 3.89464 0.734784 4 1 4ZM14 2H16V3V4H14V2ZM19 9H10C10 8.46957 9.78929 7.96086 9.41421 7.58579C9.03914 7.21072 8.53043 7 8 7H6C5.46957 7 4.96086 7.21072 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9H1C0.734784 9 0.48043 9.10536 0.292893 9.2929C0.105357 9.48043 0 9.73479 0 10C0 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8946 0.734784 11 1 11H4C4 11.5304 4.21071 12.0391 4.58579 12.4142C4.96086 12.7893 5.46957 13 6 13H8C8.53043 13 9.03914 12.7893 9.41421 12.4142C9.78929 12.0391 10 11.5304 10 11H19C19.2652 11 19.5196 10.8946 19.7071 10.7071C19.8946 10.5196 20 10.2652 20 10C20 9.73479 19.8946 9.48043 19.7071 9.2929C19.5196 9.10536 19.2652 9 19 9ZM6 11V9H8V10V11H6ZM19 16H16C16 15.4696 15.7893 14.9609 15.4142 14.5858C15.0391 14.2107 14.5304 14 14 14H12C11.4696 14 10.9609 14.2107 10.5858 14.5858C10.2107 14.9609 10 15.4696 10 16H1C0.734784 16 0.48043 16.1054 0.292893 16.2929C0.105357 16.4804 0 16.7348 0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H10C10 18.5304 10.2107 19.0391 10.5858 19.4142C10.9609 19.7893 11.4696 20 12 20H14C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17C20 16.7348 19.8946 16.4804 19.7071 16.2929C19.5196 16.1054 19.2652 16 19 16ZM12 18V16H14V17V18H12Z"
        fill={color ?? palette.colors.gray.darkest}
      />
    </svg>
  );
};