import { Meta, Story } from '@storybook/react';
import React from 'react';

import { StepBar } from '../src/components/StepBar';
import { StepBarProps } from '../src/types/layout';

export default {
  title: 'Components/StepBar',
  component: StepBar,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const Template: Story<StepBarProps> = (props) => (
  <div style={{ width: '500px' }}>
    <StepBar {...props} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  currentStep: 1,
  total: 3,
};
