import styled from 'styled-components';

import { borders, colors } from '../../theme/';
import { CardProps } from '../../types/layout';
import { FlexBox } from '../FlexBox';

export const StyledCard = styled(FlexBox)<CardProps>`
  border-top: ${({ bordered }): string | undefined =>
    bordered ? `1px solid ${colors.border.default}` : 'transparent'};
  border-radius: ${({ noRound }): string | undefined =>
    noRound ? '0' : borders.radius.card};
  box-shadow: ${({ noShadow }): string | undefined =>
    noShadow ? 'none' : '0 0 10px 0 rgba(0, 0, 0, 0.1)'};
  background-color: ${colors.colors.white};
`;
