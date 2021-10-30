import styled, {
  css,
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { FlexBox } from '../';
import { borders, colors, spacing } from '../../theme';
import { flexPosition } from '../../utils/mixins';

export interface DialogProps {
  isOpen?: boolean;
  width?: string;
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  customStyles?: CSSObject | FlattenSimpleInterpolation;
}

export const StyledOverlay = styled(FlexBox)<DialogProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  opacity: ${({ isOpen }): string => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }): string => (isOpen ? 'visible' : 'hidden')};
  z-index: 99999;
`;

export const StyledDialogBox = styled.div<DialogProps>`
  ${({ alignItems }): FlattenSimpleInterpolation => css`
    ${flexPosition(alignItems ?? 'center', 'space-between', 'column')};
    text-align: ${!alignItems ? 'center' : 'left'};
  `}
  width: ${({ width }): string => width ?? 'auto'};
  min-height: 200px;
  height: unset !important;
  background-color: ${colors.text.white};
  border-radius: ${borders.radius.card};
  padding: ${spacing.dialog};
  ${({ customStyles }): CSSObject | FlattenSimpleInterpolation =>
    customStyles || {}}
`;

export const StyledActions = styled.div`
  width: 100%;
  ${flexPosition('center', 'flex-end')};

  button {
    margin: 15px 5px 5px 5px;
  }
`;
