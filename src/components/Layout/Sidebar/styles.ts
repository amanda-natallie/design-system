import styled from 'styled-components';

import { motion } from '../../../lib/framer-motion';
import { palette } from '../../../theme/colors';
import { pxToRem } from '../../../utils/grid';

export const StyledSidebar = styled(motion.div)`
  width: ${pxToRem(280)};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  background: ${palette.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

  & > svg {
    margin-bottom: ${pxToRem(30)};
    margin-top: ${pxToRem(33)};
    width: 99%;
  }
  @media print {
    display: none;
  }
`;

export const StyledCollapseButton = styled(motion.button)`
  position: absolute;
  top: ${pxToRem(10)};
  right: ${pxToRem(-15)};
  background: white;
  border: 1px solid ${palette.colors.gray.lighter};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  z-index: 1;
  border-radius: 100%;
`;
