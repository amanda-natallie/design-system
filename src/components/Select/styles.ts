import styled from 'styled-components';

import { spacing } from '../../theme';
import { palette } from '../../theme/colors';
import { fontSizes } from '../../theme/fonts';
import { flexPosition } from '../../utils/mixins';

export const MenuItem = styled.div`
  width: 100%;
  height: ${spacing.input};
  cursor: pointer;
  text-align: center;
  font-size: ${fontSizes.input};
  ${flexPosition('center', 'center')};
  border-radius: 0;
  border: 0;
  background: ${palette.colors.white};
  color: ${palette.text.secondary};
  &:not(:last-of-type) {
    border-bottom: 1px solid ${palette.colors.gray.lighter};
  }
  &:hover {
    background-color: ${palette.background.paper};
  }
`;
