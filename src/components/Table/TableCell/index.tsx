import React from 'react';
import { css } from 'styled-components';

import { IconArrowDownOrder, IconArrowUpOrder } from '../../../icons';
import { TableCellProps } from '../../../types/layout';
import { Button } from '../../Button';
import { StyledTableCellTd, StyledTableCellTh } from './styles';

export const TableCell: React.FC<TableCellProps> = ({
  children,
  component = 'td',
  checkbox,
  order,
  orderBy = '',
  orderByCb = (): null => null,
  width,
  actionCell,
  colSpan,
  hasBadge,
}) => {
  const componentsMap = {
    td: StyledTableCellTd,
    th: StyledTableCellTh,
  };
  const SelectedTableCell = componentsMap[component];

  const renderOrderDirection = (
    orderDirection: typeof order,
    action: () => void
  ): JSX.Element => {
    // desc \/ | asc /\
    const customStyle = css`
      padding: 4px 8px;
    `;
    return (
      <Button
        onClick={(): void => action()}
        iconButton
        ghost
        customStyles={customStyle}
      >
        <span
          style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}
        >
          <IconArrowUpOrder
            visibility={orderDirection === 'DESC' ? 'hidden' : 'visible'}
          />
          <IconArrowDownOrder
            visibility={orderDirection === 'ASC' ? 'hidden' : 'visible'}
          />
        </span>
      </Button>
    );
  };

  return (
    <SelectedTableCell width={width} actionCell={actionCell} colSpan={colSpan}>
      {checkbox}
      {children && (
        <div
          style={{
            display: 'flex',
            flexDirection: component === 'th' ? 'row' : 'column',
            justifyContent: component === 'th' ? 'flex-start' : 'center',
            alignItems:
              component === 'th' || hasBadge ? 'center' : 'flex-start',
            textAlign: hasBadge ? 'center' : 'left',
          }}
        >
          {children}
          {orderBy && renderOrderDirection(order, () => orderByCb(orderBy))}
        </div>
      )}
    </SelectedTableCell>
  );
};

export default TableCell;
