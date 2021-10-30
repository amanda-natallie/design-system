import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Typography } from '../src/components/Typography';
import { TypographyProps } from '../src/types/layout';

export default {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template: Story<TypographyProps> = ({ children, ...props }) => (
  <Typography {...props}>{children}</Typography>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'I am the primary story Typography',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'I am the secondary story Typography',
  variant: 'secondary',
};

export const AsOtherTag = Template.bind({});
AsOtherTag.args = {
  children: 'I am a small Typography',
  as: 'small',
};
