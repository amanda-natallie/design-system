import { css, FlattenSimpleInterpolation } from 'styled-components';

import { pxToRem } from '../utils/grid';

export { default as borders } from './borders';
export { default as colors } from './colors';
export { default as fonts } from './fonts';
export { default as GlobalStyles } from './globalStyles';
export { default as spacing } from './spacing';

export const tableDefaultPadding = (): FlattenSimpleInterpolation => {
  return css`
    padding: 0 ${pxToRem(24)};
  `;
};
