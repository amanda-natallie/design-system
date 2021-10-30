import styled, {
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { colors } from '../../theme';
import { TypographyProps } from '../../types/layout';

const StyledTypography = styled.div<TypographyProps>`
  color: ${({ variant }): string => colors.text[variant ?? 'primary']};
  ${({ customStyles }): CSSObject | FlattenSimpleInterpolation =>
    customStyles || {}}
`;

export default StyledTypography;
