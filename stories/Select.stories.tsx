import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import Select from '../src/components/Select';
import { SelectProps } from '../src/types/layout';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;
export const Default: Story<SelectProps> = () => {
  const [value, setValue] = useState<number | string>(0);

  const options = [
    { id: 1, name: 'Brand 01' },
    { id: 2, name: 'Brand 02' },
    { id: 3, name: 'Brand 03' },
  ];
  return (
    <Select
      label="label"
      placeholder="placeholder"
      value={value}
      setValue={setValue}
      options={options}
    />
  );
};
export const WithErrorMessage: Story<SelectProps> = () => {
  const [value, setValue] = useState<number | string>(0);

  const options = [
    { id: 1, name: 'Brand 01' },
    { id: 2, name: 'Brand 02' },
    { id: 3, name: 'Brand 03' },
  ];
  return (
    <Select
      messageError="error message"
      label="label"
      placeholder="placeholder"
      value={value}
      setValue={setValue}
      options={options}
    />
  );
};
export const OnlyBorderError: Story<SelectProps> = () => {
  const [value, setValue] = useState<number | string>(0);

  const options = [
    { id: 1, name: 'Brand 01' },
    { id: 2, name: 'Brand 02' },
    { id: 3, name: 'Brand 03' },
  ];
  return (
    <Select
      inputError
      label="label"
      placeholder="placeholder"
      value={value}
      setValue={setValue}
      options={options}
    />
  );
};

export const Disabled: Story<SelectProps> = () => {
  return (
    <Select
      label="label"
      placeholder="selectedOption"
      value={0}
      setValue={(): void => undefined}
      disabled
      options={[]}
    />
  );
};

export const BackgroundWhenSelect: Story<SelectProps> = () => {
  const [value, setValue] = useState<number | string>(0);

  const options = [
    { id: 1, name: 'Brand 01' },
    { id: 2, name: 'Brand 02' },
    { id: 3, name: 'Brand 03' },
  ];
  return (
    <Select
      bgWhenSelected
      label="label"
      placeholder="select one"
      value={value}
      setValue={setValue}
      options={options}
    />
  );
};
