export type Palette = {
  colors: {
    red: string;
    green: string;
    yellow: string;
    blue: string;
    light_blue: string;
    gray: {
      darkest: string;
      darker: string;
      dark: string;
      medium: string;
      light: string;
      lighter: string;
      lightest: string;
    };
    white: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    white: string;
  };
  background: {
    default: string;
    paper: string;
    green: string;
    yellow: string;
    red: string;
  };
  border: {
    default: string;
    disabled: string;
  };
};

export interface Gray {
  darkest: string;
  darker: string;
  dark: string;
  medium: string;
  light: string;
  lighter: string;
  lightest: string;
}

export interface Box {
  DEFAULT_BOX_SHADOW: string;
  TAB_BAR_BOX_SHADOW: (color?: string) => string;
}
