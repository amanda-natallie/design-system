import React from 'react';
import { useSnackbar as useSnackbarDefault } from 'react-simple-snackbar';

import { Typography } from '../components/Typography';
import { borders, colors } from '../theme';

interface optionsInterface {
  position?: string;
  style?: Record<string, string>;
  closeStyle?: Record<string, string>;
}

const useSnackbar = (
  error = false,
  options?: optionsInterface
): ((text: string, duration?: number) => void)[] => {
  const style = options?.style || {};
  const closeStyle = options?.closeStyle || {};
  const [openSnackbar, closeSnackbar] = useSnackbarDefault({
    position: options?.position,
    style: {
      borderRadius: borders.radius.alert,
      marginTop: '72px',
      minWidth: '0px',
      backgroundColor: error ? colors.red : colors.green,
      ...style,
    },
    closeStyle: {
      fontSize: '16px',
      ...closeStyle,
    },
  });

  const openCustomSnackbar = (text: string, duration?: number): void =>
    openSnackbar(
      <Typography as="h5" variant="white">
        {text}
      </Typography>,
      duration
    );

  return [openCustomSnackbar, closeSnackbar];
};

export default useSnackbar;
