import { rgba } from 'polished';
import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import colors, { badgeColors } from '../../theme/colors';
import { BadgeColors } from '../../types/layout';
import { pxToRem } from '../../utils/grid';

interface Props {
  variant: keyof typeof BadgeColors;
  secondary: boolean;
  bordered?: boolean;
  customStyles?: CSSObject | FlattenSimpleInterpolation;
}

export const StyledBadge = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(3)} ${pxToRem(35)};
  border-radius: ${pxToRem(4)};
  width: auto;
  ${(props): FlattenSimpleInterpolation => {
    const darkColor = props.secondary || props.bordered;
    let bgColor = '';

    if (props.bordered) {
      !props.secondary
        ? (bgColor = rgba(badgeColors[props.variant].opacity, 0.3))
        : (bgColor = badgeColors[props.variant].opacity);
    } else {
      props.secondary
        ? (bgColor = badgeColors[props.variant].opacity)
        : (bgColor = badgeColors[props.variant].background);
    }

    return css`
      & > span {
        font-size: ${pxToRem(13.2)};
        font-weight: 400;
        color: ${!darkColor
          ? badgeColors[props.variant].color
          : props.variant === 'yellow'
          ? '#b38f0e'
          : badgeColors[props.variant].background};
      }

      background-color: ${bgColor};
      border: ${props.bordered
        ? badgeColors[props.variant].border
        : '1px solid' + bgColor};

      ${props.customStyles || {}}
    `;
  }}
`;
