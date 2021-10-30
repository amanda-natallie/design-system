/* eslint-disable max-len */
import React from 'react';

interface IconProps {
  color?: string;
  visibility?: 'visible' | 'hidden' | 'collapse';
}

export const IconArrowDownOrder: React.FC<IconProps> = ({
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
      <path
        stroke="#25282B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.333 2.667L4 5.332l2.667-2.667"
      />
    </svg>
  );
};
