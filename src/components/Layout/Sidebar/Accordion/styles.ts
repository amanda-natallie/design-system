import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { palette } from '../../../../theme/colors';
import { pxToRem } from '../../../../utils/grid';

interface CustomProps {
  active?: boolean;
  expanded?: boolean;
  disabled?: boolean;
}

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.img<CustomProps>`
  width: 24px;
  height: 24px;
`;

export const Label = styled.p<CustomProps>`
  font-size: ${pxToRem(14)};
  color: ${({ disabled }): string =>
    disabled ? palette.colors.gray.medium : palette.colors.gray.dark};
`;

export const Arrow = styled.svg<CustomProps>`
  position: absolute;
  right: 0;
  transform: rotate(180deg);
  transition: transform 0.2s ease;
  margin-top: 2px;
  fill: none !important;
  &:hover {
    stroke: none;
  }
  ${({ expanded }): FlattenSimpleInterpolation | false | undefined =>
    expanded &&
    css`
      transform: rotate(360deg);
    `}
  & polyline {
    fill: none;
  }
`;

export const ContentContainer = styled.div<CustomProps>`
  display: flex;
  flex-direction: column;
  backface-visibility: hidden;
  max-height: 0;
  transition: max-height 0.2s;
  transition-delay: 0s;
  overflow: hidden;
  background-color: ${palette.colors.white};
  ${({ expanded }): FlattenSimpleInterpolation | false | undefined =>
    expanded &&
    css`
      max-height: 1600px;
    `}
  width: 100%;
  align-items: flex-start;
`;
