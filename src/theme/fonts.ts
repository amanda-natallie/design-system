import { pxToRem } from '../utils/grid';
import PoppinsBlackwoff from './fonts/Poppins-Black.woff';
import PoppinsBlackwoff2 from './fonts/Poppins-Black.woff2';
import PoppinsBlackItalicwoff from './fonts/Poppins-BlackItalic.woff';
import PoppinsBlackItalicwoff2 from './fonts/Poppins-BlackItalic.woff2';
import PoppinsBoldwoff from './fonts/Poppins-Bold.woff';
import PoppinsBoldwoff2 from './fonts/Poppins-Bold.woff2';
import PoppinsBoldItalicwoff from './fonts/Poppins-BoldItalic.woff';
import PoppinsBoldItalicwoff2 from './fonts/Poppins-BoldItalic.woff2';
import PoppinsExtraBoldwoff from './fonts/Poppins-ExtraBold.woff';
import PoppinsExtraBoldwoff2 from './fonts/Poppins-ExtraBold.woff2';
import PoppinsExtraBoldItalicwoff from './fonts/Poppins-ExtraBoldItalic.woff';
import PoppinsExtraBoldItalicwoff2 from './fonts/Poppins-ExtraBoldItalic.woff2';
import PoppinsExtraLightwoff from './fonts/Poppins-ExtraLight.woff';
import PoppinsExtraLightwoff2 from './fonts/Poppins-ExtraLight.woff2';
import PoppinsExtraLightItalicwoff from './fonts/Poppins-ExtraLightItalic.woff';
import PoppinsExtraLightItalicwoff2 from './fonts/Poppins-ExtraLightItalic.woff2';
import PoppinsItalicwoff from './fonts/Poppins-Italic.woff';
import PoppinsItalicwoff2 from './fonts/Poppins-Italic.woff2';
import PoppinsLightwoff from './fonts/Poppins-Light.woff';
import PoppinsLightwoff2 from './fonts/Poppins-Light.woff2';
import PoppinsLightItalicwoff from './fonts/Poppins-LightItalic.woff';
import PoppinsLightItalicwoff2 from './fonts/Poppins-LightItalic.woff2';
import PoppinsMediumwoff from './fonts/Poppins-Medium.woff';
import PoppinsMediumwoff2 from './fonts/Poppins-Medium.woff2';
import PoppinsMediumItalicwoff from './fonts/Poppins-MediumItalic.woff';
import PoppinsMediumItalicwoff2 from './fonts/Poppins-MediumItalic.woff2';
import PoppinsRegularwoff from './fonts/Poppins-Regular.woff';
import PoppinsRegularwoff2 from './fonts/Poppins-Regular.woff2';
import PoppinsSemiBoldwoff from './fonts/Poppins-SemiBold.woff';
import PoppinsSemiBoldwoff2 from './fonts/Poppins-SemiBold.woff2';
import PoppinsSemiBoldItalicwoff from './fonts/Poppins-SemiBoldItalic.woff';
import PoppinsSemiBoldItalicwoff2 from './fonts/Poppins-SemiBoldItalic.woff2';
import PoppinsThinwoff from './fonts/Poppins-Thin.woff';
import PoppinsThinwoff2 from './fonts/Poppins-Thin.woff2';
import PoppinsThinItalicwoff from './fonts/Poppins-ThinItalic.woff';
import PoppinsThinItalicwoff2 from './fonts/Poppins-ThinItalic.woff2';

export const fontSizes = {
  h1: pxToRem(52 - 10),
  h2: pxToRem(40 - 5),
  h3: pxToRem(36 - 5),
  h4: pxToRem(30 - 5),
  h5: pxToRem(24 - 5),
  h6: pxToRem(18),
  p: '1rem',
  small: '0.875rem',
  input: pxToRem(14),
  label: pxToRem(15),
};

export const fontWeights = {
  medium: 500,
  bold: 700,
};

export const lineHeights = {
  body: 1.5,
  heading: 1.125,
};

export const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
};

export const fontFaces = `
  @font-face {
    font-family: 'PoppinsBold';
    src: url(${PoppinsBoldwoff2}) format('woff2'),
        url(${PoppinsBoldwoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsBoldItalic';
    src: url(${PoppinsBoldItalicwoff2}) format('woff2'),
        url(${PoppinsBoldItalicwoff}) format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsBlackItalic';
    src: url(${PoppinsBlackItalicwoff2}) format('woff2'),
        url(${PoppinsBlackItalicwoff}) format('woff');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsExtraBold';
    src: url(${PoppinsExtraBoldwoff2}) format('woff2'),
        url(${PoppinsExtraBoldwoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsBlack';
    src: url(${PoppinsBlackwoff2}) format('woff2'),
        url(${PoppinsBlackwoff}) format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsExtraLight';
    src: url(${PoppinsExtraLightwoff2}) format('woff2'),
        url(${PoppinsExtraLightwoff}) format('woff');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsExtraBoldItalic';
    src: url(${PoppinsExtraBoldItalicwoff2}) format('woff2'),
        url(${PoppinsExtraBoldItalicwoff}) format('woff');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsExtraLightItalic';
    src: url(${PoppinsExtraLightItalicwoff2}) format('woff2'),
        url(${PoppinsExtraLightItalicwoff}) format('woff');
    font-weight: 200;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsItalic';
    src: url(${PoppinsItalicwoff2}) format('woff2'),
        url(${PoppinsItalicwoff}) format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsLight';
    src: url(${PoppinsLightwoff2}) format('woff2'),
        url(${PoppinsLightwoff}) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsLightItalic';
    src: url(${PoppinsLightItalicwoff2}) format('woff2'),
        url(${PoppinsLightItalicwoff}) format('woff');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsMedium';
    src: url(${PoppinsMediumwoff2}) format('woff2'),
        url(${PoppinsMediumwoff}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsMediumItalic';
    src: url(${PoppinsMediumItalicwoff2}) format('woff2'),
        url(${PoppinsMediumItalicwoff}) format('woff');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegularwoff2}) format('woff2'),
        url(${PoppinsRegularwoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsSemiBold';
    src: url(${PoppinsSemiBoldwoff2}) format('woff2'),
        url(${PoppinsSemiBoldwoff}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsThin';
    src: url(${PoppinsThinwoff2}) format('woff2'),
        url(${PoppinsThinwoff}) format('woff');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsSemiBoldItalic';
    src: url(${PoppinsSemiBoldItalicwoff2}) format('woff2'),
        url(${PoppinsSemiBoldItalicwoff}) format('woff');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'PoppinsThinItalic';
    src: url(${PoppinsThinItalicwoff2}) format('woff2'),
        url(${PoppinsThinItalicwoff}) format('woff');
    font-weight: 100;
    font-style: italic;
    font-display: swap;
}


`;

export default {
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  fontFaces,
};
