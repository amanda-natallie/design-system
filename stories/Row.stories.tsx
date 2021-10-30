import { Meta, Story } from '@storybook/react';
import React from 'react';

import { RowProps } from '../src';
import Col from '../src/components/Grid/Col';
import { Row } from '../src/components/Grid/Row';
import { Default } from './Col.stories';

export default {
  component: Row,
  subcomponents: { Col },
  title: 'Grid/Row',
} as Meta;

export const RowWithCols: Story<RowProps> = ({ ...args }): JSX.Element => (
  <Row {...args}>
    <Default />
  </Row>
);
