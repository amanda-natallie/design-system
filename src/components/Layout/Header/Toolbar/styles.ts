import styled from 'styled-components';

import { palette } from '../../../../theme/colors';
import { pxToRem } from '../../../../utils/grid';

export const StyledToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 100%;

  & > svg {
    margin-left: ${pxToRem(15)};
  }
`;

export const StyledUserBox = styled.div`
  padding: ${pxToRem(8)} ${pxToRem(12)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-left: ${pxToRem(12)};
  &:hover {
    background-color: ${palette.colors.white};
  }
  & > div {
    margin-right: ${pxToRem(12)};
  }
`;
