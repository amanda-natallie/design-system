import { Meta, Story } from '@storybook/react';
import React, { CSSProperties } from 'react';

import { colors, ColProps } from '../src';
import { Col } from '../src/components/Grid/Col';
import Row from '../src/components/Grid/Row';

export default {
  component: Col,
  title: 'Grid/Col',
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    customStyles: {
      control: {
        type: 'object',
      },
    },
    collapse: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
        ],
      },
    },
  },
} as Meta;

const style: CSSProperties = {
  backgroundColor: colors.background.green,
  padding: '1rem',
  border: '3px solid ' + colors.red,
};

export const Default: Story<ColProps> = ({ children, ...args }) => (
  <Row customStyles={{ width: 'calc(100vw - 100px)', border: style.border }}>
    <Col {...args}>
      <div style={style}>{children || 'Col'}</div>
    </Col>
    <Col size={3}>
      <div style={style}>Col</div>
    </Col>
    <Col size={3}>
      <div style={style}>Col</div>
    </Col>
  </Row>
);

export const Collapse: Story<ColProps> = ({ children, ...args }) => (
  <Row customStyles={{ width: 'calc(100vw - 100px)', border: style.border }}>
    <Col {...args} collapse="xs">
      <div style={style}>{children || 'hidden xs'}</div>
    </Col>
    <Col size={3}>
      <div style={style}>Col</div>
    </Col>
    <Col size={3}>
      <div style={style}>Col</div>
    </Col>
  </Row>
);
