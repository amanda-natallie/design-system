import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import Input from '../src/components/Input';
import { InputProps } from '../src/types/layout';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;
type ev = React.ChangeEvent<HTMLInputElement>;
export const Default: Story<InputProps> = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Input
      label="Input"
      name="input"
      placeholder="text input"
      value={inputValue}
      onChange={(e: ev): void => setInputValue(e.target.value)}
    />
  );
};
export const WithErrorMessage: Story<InputProps> = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Input
      label="Input"
      name="input"
      placeholder="text input"
      value={inputValue}
      onChange={(e: ev): void => setInputValue(e.target.value)}
      messageError="error message"
    />
  );
};
export const OnlyBorderError: Story<InputProps> = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Input
      label="Input"
      inputError
      name="input"
      placeholder="text input"
      value={inputValue}
      onChange={(e: ev): void => setInputValue(e.target.value)}
    />
  );
};
export const WithIconWithoutLabel: Story<InputProps> = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Input
      noLabel
      showIconPassword
      placeholder="Type your password"
      name="input"
      value={inputValue}
      onChange={(e: ev): void => setInputValue(e.target.value)}
      type="password"
      maxLength={6}
    />
  );
};

export const PasswordInput: Story<InputProps> = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Input
      label="Input"
      showIconPassword
      placeholder="Type your password"
      name="input"
      value={inputValue}
      onChange={(e: ev): void => setInputValue(e.target.value)}
      type="password"
      maxLength={6}
    />
  );
};
export const Disabled: Story<InputProps> = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Input
      label="Input"
      placeholder="text input"
      name="input"
      value={inputValue}
      onChange={(e: ev): void => setInputValue(e.target.value)}
      disabled
    />
  );
};
