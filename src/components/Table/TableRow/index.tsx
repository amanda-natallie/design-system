import React from 'react';

import { StyledComponentProps } from '../../../types/layout';
import { StyledTableRow } from './styles';

interface Props extends StyledComponentProps {
  align?: 'center' | 'left' | 'right';
}

export const TableRow: React.FC<Props> = ({ children }) => (
  <StyledTableRow>{children}</StyledTableRow>
);

export default TableRow;
