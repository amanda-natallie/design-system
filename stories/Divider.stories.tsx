import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Divider } from '../src/components/Divider';
import { DividerProps } from '../src/types/layout';

export default {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Template: Story<DividerProps> = (props) => <Divider {...props} />;
