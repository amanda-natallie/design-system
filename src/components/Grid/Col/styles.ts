import styled, {
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { ColProps } from '../../../types/layout';
import { respondTo } from '../../../utils/grid';

export const StyledCol = styled.div<ColProps>`
  ${({ collapse }): string =>
    collapse &&
    respondTo[collapse]`
        display: none;
  `}
  flex: ${({ size = 1 }): number => size};
  ${({ customStyles }): CSSObject | FlattenSimpleInterpolation =>
    customStyles || {}}
`;
