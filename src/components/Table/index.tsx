import React from 'react';
import { css } from 'styled-components';

import { tableDefaultPadding } from '../../theme';
import { TableProps } from '../../types/layout';
import { pxToRem } from '../../utils/grid';
import { Card } from '../Card';
import { StyledTable } from './styles';

export const Table: React.FC<TableProps> = ({
  children,
  topToolbar,
  bottomToolbar,
  emptyComponent,
  cardCustomStyles,
}) => (
  <Card
    fullWidth
    horizontalAlign="flex-start"
    customStyles={css`
      border-radius: ${pxToRem(3)};
      align-items: flex-start;
      overflow-y: auto;
      min-height: 500px;
      ${tableDefaultPadding()};
      ${cardCustomStyles};
    `}
  >
    {topToolbar}
    <StyledTable>{children}</StyledTable>
    {emptyComponent && emptyComponent({})}
    {bottomToolbar}
  </Card>
);

export default Table;
