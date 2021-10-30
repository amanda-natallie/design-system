import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button } from '../src/components/Button';
import { IconBell, IconMail } from '../src/icons';
import { ButtonProps } from '../src/types/layout';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template: Story<ButtonProps> = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'I am the primary story button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'I am the secondary story button',
};

export const WithAction = Template.bind({});
WithAction.args = {
  children: 'I am a button with action',
  onClick: (): void => alert('I am clicked'),
};
export const SecondaryWithAction = Template.bind({});
SecondaryWithAction.args = {
  variant: 'secondary',
  onClick: (): void => alert('I am clicked'),
  children: (
    <>
      <IconBell />
      Secondary Icon with Button!
    </>
  ),
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  variant: 'primary',
  children: (
    <>
      <IconMail />
      Icon Button!
    </>
  ),
};

export const Small = Template.bind({});
Small.args = {
  children: 'I am a small story button',
  small: true,
};
export const Ghost = Template.bind({});
Ghost.args = {
  children: 'I am a small story button',
  ghost: true,
};
export const GhostActive = Template.bind({});
GhostActive.args = {
  children: 'I am a small story button',
  ghost: true,
  active: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'I am a disabled story button',
  disabled: true,
};
