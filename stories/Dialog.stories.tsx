import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { Button } from '../src/components/Button';
import { Dialog } from '../src/components/Dialog';
import { DialogProps } from '../src/types/layout';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Default: Story<DialogProps> = () => {
  const [active, toggleActive] = useState(false);

  const info = {
    title: 'atenção',
    subtitle: 'você precisa ler este recado',
    cancelButton: {
      title: 'cancelar',
      action: (): void => toggleActive(false),
    },
    confirmButton: {
      title: 'ok',
      action: (): void => toggleActive(false),
    },
  };
  return (
    <>
      <Button onClick={(): void => toggleActive(true)}>Ativar Dialog</Button>
      <Dialog isOpen={active} setOpen={toggleActive} info={info} />
    </>
  );
};

export const OnlyOneAction: Story<DialogProps> = (): JSX.Element => {
  const [active, toggleActive] = useState(false);
  const handleConfirm = (): void => {
    alert('callback & fechar dialog');
    toggleActive(false);
  };
  const info = {
    title: 'atenção',
    subtitle: 'você precisa ler este recado',

    confirmButton: {
      title: 'ok',
      action: (): void => handleConfirm(),
    },
  };
  return (
    <>
      <Button onClick={(): void => toggleActive(true)}>Ativar Dialog</Button>
      <Dialog isOpen={active} setOpen={toggleActive} info={info} />
    </>
  );
};

export const WithAlign: Story<DialogProps> = (): JSX.Element => {
  const [active, toggleActive] = useState(false);

  const info = {
    title: 'atenção',
    subtitle: 'você precisa ler este recado',

    confirmButton: {
      title: 'ok',
    },
  };
  return (
    <>
      <Button onClick={(): void => toggleActive(true)}>Ativar Dialog</Button>
      <Dialog
        alignItems="center"
        disableBackdropClick
        isOpen={active}
        setOpen={toggleActive}
        info={info}
      />
    </>
  );
};
export const DisableBackdropClick: Story<DialogProps> = (): JSX.Element => {
  const [active, toggleActive] = useState(false);
  const handleConfirm = (): void => {
    alert('callback & fechar dialog');
    toggleActive(false);
  };
  const info = {
    title: 'atenção',
    subtitle: 'você precisa ler este recado',

    confirmButton: {
      title: 'ok',
      action: (): void => handleConfirm(),
    },
  };
  return (
    <>
      <Button onClick={(): void => toggleActive(true)}>Ativar Dialog</Button>
      <Dialog
        disableBackdropClick
        isOpen={active}
        setOpen={toggleActive}
        info={info}
      />
    </>
  );
};
