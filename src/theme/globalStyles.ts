import { createGlobalStyle } from 'styled-components';

import { pxToRem } from '../utils/grid';
import colors from './colors';
import { fontFaces, fontSizes, lineHeights } from './fonts';

export default createGlobalStyle`
#root {
  padding:0 !important; ;
}
  ${fontFaces}
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 15px;
    color: ${colors.text.primary};
    outline: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Poppins', Helvetica, Sans-Serif; 
    font-weight: 500;

    & svg {
      fill: ${colors.text.primary};
    }
  }

  body {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    background: ${colors.background.paper};
    font-family: 'Poppins', Helvetica, Sans-Serif; 
  }

  h1 { 
    font-size: ${fontSizes.h1} ;
    font-weight: 900;
  }
  h2 { 
    font-size: ${fontSizes.h2};
    font-weight: 800;
  }
  h3 {
    font-size: ${fontSizes.h3};  
    font-weight: 700;
  }
  h4 {
     font-size: ${fontSizes.h4}; 
      font-weight: 700;
  }
  h5 {
     font-size: ${fontSizes.h5}; 
      font-weight: 700;
    }
  h6 {
     font-size: ${fontSizes.h6};
      font-weight: 700;
    }
  p {
     font-size: ${fontSizes.p} 
    }
  small {
     font-size: ${fontSizes.small} 
  }
  p, blockquote, span, small, li, button, label, a {
    font-family: 'Poppins', Helvetica, Sans-Serif;
  }
  label {
    display: inline-block;
    font-size: ${fontSizes.label};
    font-weight: 700;
    margin-left: ${pxToRem(10)};
    margin-bottom: ${pxToRem(10)};
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: ${lineHeights.heading};
  }
  a:disabled, button:disabled {
    cursor: not-allowed;
  }
  a:enabled, button:enabled {
    cursor: pointer;
  }
`;
