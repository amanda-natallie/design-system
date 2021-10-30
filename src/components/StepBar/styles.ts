import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { palette } from '../../theme/colors';

interface BulletProps {
  state: 'previous' | 'current' | 'next';
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Bullet = styled.div<BulletProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-sizing: border-box;
  z-index: 1;

  ${({ state }): FlattenSimpleInterpolation => {
    switch (state) {
      case 'previous':
        return css`
          background-color: ${palette.colors.red};
          color: ${palette.colors.white};
        `;
      case 'current':
        return css`
          background-color: ${palette.colors.white};
          color: ${palette.colors.red};
          border: 2px solid ${palette.colors.red};
        `;
      case 'next':
        return css`
          background-color: ${palette.colors.white};
          color: ${palette.colors.gray.medium};
          border: 2px solid ${palette.colors.gray.medium};
        `;
      default:
        return css``;
    }
  }}
`;

const LineWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  position: relative;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
  left: 0;
`;

interface LineProps {
  total: number;
  active: boolean;
}

const Line = styled.div<LineProps>`
  height: 6px;
  background-color: ${({ active }): string =>
    active ? palette.colors.red : palette.colors.gray.medium};
  width: ${({ total }): string =>
    total - 1 ? `calc(100% / ${total - 1} - 32px)` : '0'};
`;

export default {
  Wrapper,
  Bullet,
  LineWrapper,
  Line,
};
