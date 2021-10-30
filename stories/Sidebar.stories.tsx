import { Meta, Story } from '@storybook/react';
import React from 'react';

import { IconCredit, IconDashboard, IconTicket } from '../src';
import { Sidebar } from '../src/components/Layout/Sidebar';
import { MenuItemsProps } from '../src/types/layout';

export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Default: Story<MenuItemsProps> = () => {
  return (
    <Sidebar
      menuItems={[
        {
          title: 'Página Inicial',
          onClick: (): void => alert('clicked!'),
          icon: <IconDashboard />,
        },
        {
          title: 'Tickets',
          onClick: (): void => alert('clicked!'),
          icon: <IconTicket />,
        },
        {
          title: 'Req. de Compra',
          active: true,
          onClick: (): void => alert('clicked!'),
          icon: <IconCredit />,
          dropdownItems: [
            {
              title: 'Sub Item 1',
              onClick: (): void => alert('clicked!'),
              active: true,
            },
            {
              title: 'Sub Item 2',
              onClick: (): void => alert('clicked!'),
            },
          ],
        },
      ]}
    />
  );
};
