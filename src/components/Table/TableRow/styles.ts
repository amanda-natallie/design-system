import styled, {
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { StyledComponentProps } from '../../../types/layout';

interface CustomProps extends StyledComponentProps {
  isLoading?: boolean;
}

export const StyledTableRow = styled.tr<CustomProps>`
  & > th,
  td {
    border-bottom: solid 1px #e4e4e4;
  }
  ${({ customStyles }): CSSObject | FlattenSimpleInterpolation =>
    customStyles || {}};
`;
