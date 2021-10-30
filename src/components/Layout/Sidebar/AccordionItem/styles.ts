import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { pxToRem } from '../../../../utils/grid';
import { ActiveHoverStyles } from '../MenuItems/styles';

interface CustomProps {
  active?: boolean;
  disabled?: boolean;
}

export const StyledAccordionItem = styled.button<CustomProps>`
  transition: all 0.2s ease-in-out;
  border-left: 8px solid transparent;
  width: 100%;
  padding: 0 ${pxToRem(18)};
  height: ${pxToRem(37)};
  text-align: center;
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
  background-color: white;
  ${({ active }): FlattenSimpleInterpolation | false | undefined =>
    active && ActiveHoverStyles()}
  &:hover {
    ${ActiveHoverStyles()}
  } ;
`;
