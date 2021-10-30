import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { IconCredit, IconDashboard, IconTicket } from '../src';
import LayoutWrapper from '../src/components/Layout/';
import ErrorBoundary from '../src/lib/error';
import { LayoutWrapperProps } from '../src/types/layout';

export default {
  title: 'Layout/LayoutWrapper',
  component: LayoutWrapper,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Default: Story<LayoutWrapperProps> = () => {
  const [term, setTerm] = useState('');
  return (
    <ErrorBoundary>
      <LayoutWrapper
        searchPlaceholder="Search..."
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
            active: true,
          },
          {
            title: 'Req. de Compra',
            onClick: (): void => alert('clicked!'),
            icon: <IconCredit />,
            dropdownItems: [
              {
                title: 'Sub Item 1',
                onClick: (): void => alert('clicked!'),
              },
              {
                title: 'Sub Item 2',
                onClick: (): void => alert('clicked!'),
              },
            ],
          },
        ]}
        searchTerm={term}
        onChange={(e): void => setTerm(e.target.value)}
        user={{
          id: '1',
          name: 'Suellen Marques',
          avatar: 'https://avatars0.githubusercontent.com/u/1234?s=460&v=4',
          email: 'suellen.marques@femsa.com.br',
          role: 'Admin',
        }}
        notifications={[
          {
            id: '1',
            title: 'Novo ticket',
            description: 'Novo ticket criado',
            icon: <IconTicket />,
            url: 'https://femsa.com.br',
          },
          {
            id: '2',
            title: 'Ticket Atualizado',
            description: 'Novo lote de canetas',
            icon: <IconTicket />,
            url: 'https://femsa.com.br',
          },
        ]}
        messages={[
          {
            id: '1',
            ticketId: '1',
            title: 'Novo ticket',
            description: 'Novo ticket criado',
            url: 'https://femsa.com.br',
          },
        ]}
      >
        <h1>bom dia</h1>
      </LayoutWrapper>
    </ErrorBoundary>
  );
};
