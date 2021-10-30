import { addDecorator } from '@storybook/react';
import GlobalStyle from './../src/theme/globalStyles';
import './reset.css';

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
};
