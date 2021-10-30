import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { IconTicket } from '../src';
import { Header } from '../src/components/Layout/Header';
import { HeaderProps } from '../src/types/layout';

export default {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Default: Story<HeaderProps> = () => {
  const [term, setTerm] = useState('');
  return (
    <Header
      searchTerm={term}
      onChange={(e): void => setTerm(e.target.value)}
      user={{
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
          title: 'Novo ticket',
          description: 'Novo ticket criado',
          url: 'https://femsa.com.br',
        },
      ]}
    />
  );
};
