import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Avatar } from '../src/components/Avatar';
import { AvatarProps } from '../src/types/layout';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template: Story<AvatarProps> = (props) => <Avatar {...props} />;

export const Small = Template.bind({});
Small.args = {
  imageUrl: 'https://i.pravatar.cc/100?u=amanda1',
  alt: 'Amanda',
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  imageUrl: 'https://i.pravatar.cc/200?u=amanda2',
  alt: 'Jackeline',
  size: 'md',
};

export const Large = Template.bind({});
Large.args = {
  imageUrl: 'https://i.pravatar.cc/300?u=amanda3',
  alt: 'Jackeline',
  size: 'lg',
};

export const WithFallback = Template.bind({});
WithFallback.args = {
  imageUrl: 'https://invalidurl.invalid',
  alt: 'Jackeline',
  size: 'md',
};

export const WithFallbackNoAlt = Template.bind({});
WithFallbackNoAlt.args = {
  imageUrl: 'https://invalidurl.invalid',
  size: 'md',
};
