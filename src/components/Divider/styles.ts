import styled from 'styled-components';

import { palette } from '../../theme/colors';
import { DividerProps } from '../../types/layout';

export const StyledDivider = styled.hr<DividerProps>`
  display: inline-block;
  margin: ${(props): string => (props.margin ? props.margin : '20px 0')};
  border-bottom: 1px solid
    ${(props): string =>
      props.borderColor ? props.borderColor : palette.colors.gray.medium};
  width: ${(props): string => (props.fullWidth ? '100%' : '')};
`;
