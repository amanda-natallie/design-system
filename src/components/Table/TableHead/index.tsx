import React from 'react';

import { StyledComponentProps } from '../../../types/layout';
import { StyledTableHead } from './styles';

type Props = StyledComponentProps;

export const TableHead: React.FC<Props> = ({ children, customStyles }) => (
  <StyledTableHead customStyles={customStyles}>{children}</StyledTableHead>
);

export default TableHead;
