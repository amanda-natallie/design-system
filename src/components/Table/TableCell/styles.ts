import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { palette } from '../../../theme/colors';
import { StyledComponentProps } from '../../../types/layout';
import { pxToRem } from '../../../utils/grid';

interface CustomProps extends StyledComponentProps {
  align?: 'center' | 'left' | 'right';
  width?: string;
  actionCell?: boolean;
}

const commonTableCellStyle = ({
  width = 'auto',
  actionCell = false,
}: CustomProps): FlattenSimpleInterpolation => css`
  padding: ${pxToRem(12)} 0 ${pxToRem(12)} 0;
  width: ${width};
  & > p {
    max-width: ${width};
    ${!actionCell &&
    `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;`}
  }
`;

export const StyledTableCellTd = styled.td<CustomProps>`
  ${(props): FlattenSimpleInterpolation => commonTableCellStyle(props)};
  & > p {
    font-weight: normal;
    font-size: ${pxToRem(14)};
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: ${palette.colors.gray.dark};
  }
  ${({ customStyles = {} }): FlattenSimpleInterpolation | CSSObject =>
    customStyles}
`;

export const StyledTableCellTh = styled.th<CustomProps>`
  ${(props): FlattenSimpleInterpolation => commonTableCellStyle(props)};
  & > p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${pxToRem(14)};
    font-weight: 600;
    letter-spacing: normal;
    text-align: left;
    color: ${palette.colors.gray.dark};
    padding-right: ${pxToRem(12)};
  }
  ${({ customStyles = {} }): FlattenSimpleInterpolation | CSSObject =>
    customStyles}
`;
