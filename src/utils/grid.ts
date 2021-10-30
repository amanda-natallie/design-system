/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, FlattenInterpolation, ThemeProps } from 'styled-components';

export type breakpointsType = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

export const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
} as breakpointsType;

type cssParams = Parameters<typeof css>;
const keys = Object.keys(breakpoints) as Array<keyof breakpointsType>;

export const respondTo = keys.reduce((accumulator, label) => {
  accumulator[label] = (
    ...args: cssParams
  ): FlattenInterpolation<ThemeProps<any>> => {
    return css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
  };
  return accumulator;
  // eslint-disable-next-line @typescript-eslint/ban-types
}, {} as Record<keyof typeof breakpoints, Function>);

export const pxToRem = (px: number): string => `${px / 16}rem`;
