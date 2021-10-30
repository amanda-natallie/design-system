import React from 'react';

import { StyledComponentProps } from '../../../types/layout';
import { StyledTableBody } from './styles';

export const TableBody: React.FC<StyledComponentProps> = ({
  children,
  customStyles,
}) => <StyledTableBody customStyles={customStyles}>{children}</StyledTableBody>;

export default TableBody;
