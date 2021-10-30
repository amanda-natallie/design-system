import styled, {
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

interface CustomProps {
  isLoading?: boolean;
  customStyles?: CSSObject | FlattenSimpleInterpolation;
}

export const StyledTableBody = styled.tbody<CustomProps>`
  ${({ customStyles = {} }): CSSObject | FlattenSimpleInterpolation =>
    customStyles}
`;
