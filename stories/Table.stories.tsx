import { Meta, Story } from '@storybook/react';
import React from 'react';

import {
  Badge,
  Dropdown,
  IconThreeDots,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '../src/';
import { DropdownItem } from '../src/components/Dropdown';
import { Typography } from '../src/components/Typography';
import { TableProps } from '../src/types/layout';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Default: Story<TableProps> = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell component="th" />
          <TableCell component="th" orderBy={'name'}>
            Fornecedor
          </TableCell>
          <TableCell component="th" order={'DESC'} orderBy={'cnpj'}>
            CNPJ
          </TableCell>
          <TableCell component="th" order={'ASC'} orderBy={'city'}>
            Cidade
          </TableCell>
          <TableCell component="th">Telefone</TableCell>
          <TableCell component="th">Email</TableCell>
          <TableCell component="th" orderBy={'status'}>
            Status
          </TableCell>
          <TableCell component="th">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell />
          <TableCell>LebonTon Lorem Ipsum</TableCell>
          <TableCell>87.871.377/0001-02</TableCell>
          <TableCell>Porto Alegre</TableCell>
          <TableCell>11 - 98459-8956</TableCell>
          <TableCell>leblonton@ind.com</TableCell>
          <TableCell>
            <Badge variant="green" label="Aprovado" />
          </TableCell>
          <TableCell actionCell>
            <IconThreeDots />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell />
          <TableCell>LebonTon Lorem Ipsum</TableCell>
          <TableCell>87.871.377/0001-02</TableCell>
          <TableCell>Porto Alegre</TableCell>
          <TableCell>45 - 95896-8956</TableCell>
          <TableCell>email@example.com</TableCell>
          <TableCell>
            <Badge variant="red" label="Reprovado" />
          </TableCell>
          <TableCell actionCell>
            <Dropdown threeDots>
              <DropdownItem onClick={(): void => undefined}>
                item 01
              </DropdownItem>
              <DropdownItem onClick={(): void => undefined}>
                item 02
              </DropdownItem>
            </Dropdown>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
export const Toolbar: Story<TableProps> = () => {
  return (
    <Table
      topToolbar={
        <Typography as="h5" customStyles={{ margin: '30px 0 10px 0' }}>
          Tickets em aberto
        </Typography>
      }
    >
      <TableHead>
        <TableRow>
          <TableCell component="th" />
          <TableCell component="th" orderBy={'name'}>
            Fornecedor
          </TableCell>
          <TableCell component="th" order={'DESC'} orderBy={'cnpj'}>
            CNPJ
          </TableCell>
          <TableCell component="th" order={'ASC'} orderBy={'city'}>
            Cidade
          </TableCell>
          <TableCell component="th">Telefone</TableCell>
          <TableCell component="th">Email</TableCell>
          <TableCell component="th" orderBy={'status'}>
            Status
          </TableCell>
          <TableCell component="th">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell />
          <TableCell>LebonTon Lorem Ipsum</TableCell>
          <TableCell>87.871.377/0001-02</TableCell>
          <TableCell>Porto Alegre</TableCell>
          <TableCell>11 - 98459-8956</TableCell>
          <TableCell>leblonton@ind.com</TableCell>
          <TableCell>
            <Badge variant="green" label="Aprovado" />
          </TableCell>
          <TableCell actionCell>
            <IconThreeDots />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell />
          <TableCell>LebonTon Lorem Ipsum</TableCell>
          <TableCell>87.871.377/0001-02</TableCell>
          <TableCell>Porto Alegre</TableCell>
          <TableCell>45 - 95896-8956</TableCell>
          <TableCell>email@example.com</TableCell>
          <TableCell>
            <Badge variant="red" label="Reprovado" />
          </TableCell>
          <TableCell actionCell>
            <Dropdown threeDots>
              <DropdownItem onClick={(): void => undefined}>
                item 01
              </DropdownItem>
              <DropdownItem onClick={(): void => undefined}>
                item 02
              </DropdownItem>
            </Dropdown>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
