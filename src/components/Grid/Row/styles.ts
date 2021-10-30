import styled, {
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { RowProps } from '../../../types/layout';

export const StyledRow = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  width: ${({ fluid }): string => (fluid ? '100%' : 'auto')};
  ${({ customStyles }): CSSObject | FlattenSimpleInterpolation =>
    customStyles || {}}
`;
