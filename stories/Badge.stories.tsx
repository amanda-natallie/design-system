import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Badge } from '../src/components/Badge';
import { BadgeProps } from '../src/types/layout';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Blue: Story<BadgeProps> = () => (
  <>
    <Badge variant="blue" label="blue" />
    <br />

    <Badge variant="blue" label="blue with border" bordered />
    <br />
    <Badge variant="blue" secondary label="blue secondary" />
    <br />
    <Badge
      variant="blue"
      bordered
      secondary
      label="blue secondary with border"
    />
  </>
);

export const Green: Story<BadgeProps> = () => (
  <>
    <Badge variant="green" label="green" />
    <br />

    <Badge variant="green" label="green with border" bordered />
    <br />
    <Badge variant="green" secondary label="green secondary" />
    <br />
    <Badge
      variant="green"
      bordered
      secondary
      label="green secondary with border"
    />
  </>
);

export const lightBlue: Story<BadgeProps> = () => (
  <>
    <Badge variant="light_blue" label="light_blue" />
    <br />

    <Badge variant="light_blue" label="light_blue with border" bordered />
    <br />
    <Badge variant="light_blue" secondary label="light_blue secondary" />
    <br />
    <Badge
      variant="light_blue"
      bordered
      secondary
      label="light_blue secondary with border"
    />
  </>
);

export const Yellow: Story<BadgeProps> = () => (
  <>
    <Badge variant="yellow" label="yellow" />
    <br />

    <Badge variant="yellow" label="yellow with border" bordered />
    <br />
    <Badge variant="yellow" secondary label="yellow secondary" />
    <br />
    <Badge
      variant="yellow"
      bordered
      secondary
      label="yellow secondary with border"
    />
  </>
);

export const Red: Story<BadgeProps> = () => (
  <>
    <Badge variant="red" label="red" />
    <br />

    <Badge variant="red" label="red with border" bordered />
    <br />
    <Badge variant="red" secondary label="red secondary" />
    <br />
    <Badge variant="red" bordered secondary label="red secondary with border" />
  </>
);
export const Gray: Story<BadgeProps> = () => (
  <>
    <Badge variant="gray" label="gray" />
    <br />
    <Badge variant="gray" label="gray with border" bordered />
    <br />
    <Badge variant="gray" secondary label="gray secondary" />
    <br />
    <Badge
      variant="gray"
      bordered
      secondary
      label="gray secondary with border"
    />
  </>
);
