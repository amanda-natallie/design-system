import styled, {
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { StyledComponentProps } from '../../../types/layout';

interface CustomProps extends StyledComponentProps {
  isLoading?: boolean;
}

export const StyledTableHead = styled.thead<CustomProps>`
  ${({ customStyles }): CSSObject | FlattenSimpleInterpolation =>
    customStyles || {}};
`;
