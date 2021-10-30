import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';

import { Textarea } from '../src/components/Textarea';
import { TextareaProps } from '../src/types/layout';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Default: Story<TextareaProps> = () => {
  const [TextareaValue, setTextareaValue] = useState('');

  return (
    <Textarea
      label="Textarea"
      placeholder="text Textarea"
      value={TextareaValue}
      onChange={(e) => setTextareaValue(e.target.value)}
    ></Textarea>
  );
};

export const WithErrorMessage: Story<TextareaProps> = () => {
  const [TextareaValue, setTextareaValue] = useState('');

  return (
    <Textarea
      label="Textarea with error"
      placeholder="text Textarea"
      value={TextareaValue}
      onChange={(e) => setTextareaValue(e.target.value)}
      messageError="error message"
    ></Textarea>
  );
};
