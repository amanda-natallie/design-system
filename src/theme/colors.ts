import { rgba } from 'polished';

import { hexToRgba } from '../utils/colors';
import { Box, Gray, Palette } from './types';

export const blue = '#4385F5';
export const light_blue = '#33B5E7';
export const red = '#F04343';
export const green = '#64AA0B';
export const yellow = '#F0CA43';
export const white = '#ffffff';

export const gray: Gray = {
  darkest: '#1E1C2f',
  darker: '#333333',
  dark: '#4B495f',
  medium: '#757575',
  light: '#DDDDDD',
  lighter: '#EDEDEf',
  lightest: '#F6F6FF',
};
export const box: Box = {
  DEFAULT_BOX_SHADOW: '0 3px 3px 0 rgba(0, 0, 0, 0.1)',
  TAB_BAR_BOX_SHADOW: (color = gray.light): string => `0 2px 0 0 ${color}`,
};
export const palette: Palette = {
  colors: {
    red,
    green,
    yellow,
    gray,
    white,
    blue,
    light_blue,
  },
  text: {
    primary: gray.darker,
    secondary: gray.medium,
    disabled: gray.light,
    white,
  },
  background: {
    default: gray.lighter,
    paper: gray.lightest,
    green: hexToRgba(green, 0.1),
    red: hexToRgba(red, 0.1),
    yellow: hexToRgba(yellow, 0.1),
  },
  border: {
    default: gray.light,
    disabled: gray.lighter,
  },
};

export const buttons = {
  primary: {
    background: palette.colors.red,
    color: palette.text.white,
    border: '1px solid ' + palette.colors.red,
    hover: {
      background: palette.colors.gray.medium,
      color: palette.text.white,
      border: '1px solid transparent',
    },
  },
  secondary: {
    background: palette.background.default,
    color: palette.text.secondary,
    border: '1px solid ' + palette.border.default,
    hover: {
      background: palette.colors.gray.medium,
      color: palette.text.white,
      border: '1px solid transparent',
    },
  },
  disabled: {
    background: palette.background.paper,
    color: palette.text.disabled,
    border: '1px solid ' + palette.border.disabled,
    hover: {
      background: palette.background.paper,
      color: palette.text.disabled,
      border: '1px solid ' + palette.border.disabled,
    },
  },
};

export const badgeColors = {
  blue: {
    background: palette.colors.blue,
    color: palette.text.white,
    border: '1px solid ' + palette.colors.blue,
    opacity: hexToRgba(palette.colors.blue, 0.1),
  },
  green: {
    background: palette.colors.green,
    color: palette.text.white,
    border: '1px solid ' + palette.colors.green,
    opacity: hexToRgba(palette.colors.green, 0.1),
  },
  light_blue: {
    background: palette.colors.light_blue,
    color: palette.text.white,
    border: '1px solid ' + palette.colors.light_blue,
    opacity: hexToRgba(palette.colors.light_blue, 0.1),
  },
  yellow: {
    background: palette.colors.yellow,
    color: palette.text.white,
    border: '1px solid ' + palette.colors.yellow,
    opacity: hexToRgba(palette.colors.yellow, 0.1),
  },
  red: {
    background: palette.colors.red,
    color: palette.text.white,
    border: '1px solid ' + palette.colors.red,
    opacity: hexToRgba(palette.colors.red, 0.1),
  },
  gray: {
    background: palette.colors.gray.medium,
    color: palette.text.white,
    border: '1px solid ' + palette.colors.gray.medium,
    opacity: hexToRgba(palette.colors.gray.medium, 0.1),
  },
};
export default {
  red,
  green,
  yellow,
  ...palette,
  buttons,
  box,
  badgeColors,
};
