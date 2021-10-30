import { pxToRem } from '../utils/grid';

export const size = {
  default: '1px solid',
};

export const radius = {
  alert: '.25rem',
  button: '0.375rem',
  card: '1rem',
  input: pxToRem(12),
  round: '50%',
  full: '100%',
  dropdown: '0.813rem',
};

export default {
  size,
  radius,
};
