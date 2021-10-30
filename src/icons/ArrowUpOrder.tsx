/* eslint-disable max-len */
import React from 'react';

interface IconProps {
  color?: string;
  visibility?: 'visible' | 'hidden' | 'collapse';
}

export const IconArrowUpOrder: React.FC<IconProps> = ({
  visibility = 'visible',
}) => {
  return (
    <svg
      style={{ visibility }}
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      fill="none"
      viewBox="0 0 8 8"
    >
      <g>
        <path
          stroke="#25282B"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.667 5.333L4 2.667 1.333 5.334"
        />
      </g>
    </svg>
  );
};
