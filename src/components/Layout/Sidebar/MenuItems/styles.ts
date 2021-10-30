import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { palette } from '../../../../theme/colors';
import { pxToRem } from '../../../../utils/grid';

interface MenuItemProps {
  active?: boolean;
}

export const ActiveHoverStyles = (): FlattenSimpleInterpolation => css`
  border-left: 6px solid ${palette.colors.red};
  background-color: ${palette.background.red};
  color: ${palette.colors.red};

  & svg,
  & path {
    fill: ${palette.colors.red};
  }
`;

export const StyledMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
  background-color: ${palette.colors.white};
`;

export const StyledMenuItem = styled.li<MenuItemProps>`
  font-size: ${pxToRem(14)};
  border-left: 6px solid transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: 0;
  padding: 0 ${pxToRem(18)};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: ${pxToRem(60)};
  z-index: 1;
  position: relative;
  flex-wrap: wrap;
  ${({ active }): FlattenSimpleInterpolation | null =>
    active ? ActiveHoverStyles() : null}

  & svg {
    margin-right: ${pxToRem(15)};
    max-height: ${pxToRem(25)};
  }
  &:hover {
    ${ActiveHoverStyles()}
  }
`;
