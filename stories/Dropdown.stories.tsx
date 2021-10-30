import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { Dropdown, DropdownItem } from '../src/components/Dropdown';
import { DropdownProps } from '../src/types/layout';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const ControlledThreeDots: Story<DropdownProps> = (): JSX.Element => {
  const [active, toggleActive] = useState(false);
  const handleToggle = (): void => {
    toggleActive(!active);
  };

  return (
    <Dropdown active={active} onClick={(): void => handleToggle()} threeDots>
      <DropdownItem onClick={(): void => alert('Gerar ordem')}>
        Gerar ordem
      </DropdownItem>
      <DropdownItem onClick={(): void => alert('Editar itens')}>
        Editar itens
      </DropdownItem>
      <DropdownItem onClick={(): void => alert('Cancelar Requisiçao')}>
        Cancelar Requisiçao
      </DropdownItem>
    </Dropdown>
  );
};

export const SelfControlled: Story<DropdownProps> = (): JSX.Element => {
  return (
    <Dropdown text="ações rápidas">
      <DropdownItem onClick={(): void => alert('Editando ordem de serviço...')}>
        editar ordem de serviço
      </DropdownItem>
      <DropdownItem
        onClick={(): void => alert('Excluindo ordem de serviço...')}
      >
        excluir ordem de serviço
      </DropdownItem>
    </Dropdown>
  );
};
