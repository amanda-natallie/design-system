import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Card, CardProps } from '../src';

export default {
  title: 'Layout/Card',
  component: Card,

  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      control: {
        type: 'select',
        options: {
          default: ['Default'],
          withChild: [
            <p key="1">Linha um</p>,
            <p key="2">Linha dois</p>,
            <p key="3">Linha tres</p>,
            <p key="4">Linha quatro</p>,
          ],
        },
      },
    },
  },

  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template: Story<CardProps> = ({ children, ...args }) => (
  <Card {...args}>{children}</Card>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default Card!',
};

export const Bordered = Template.bind({});
Bordered.args = {
  children: 'Card bordered!',
  bordered: true,
};

export const NoBorderRadius = Template.bind({});
NoBorderRadius.args = {
  children: 'Card with no border radius!',
  noRound: true,
};

export const NoBoxShadow = Template.bind({});
NoBoxShadow.args = {
  children: 'Card with no box shadow!',
  noShadow: true,
};
