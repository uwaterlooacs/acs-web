//--> Breakpoints
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const breakpoints: any = ['40em', '52em', '64em', '80em'];

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

//--> Colors
const colors = {
  black: '#000e1a',
  grey: '#434343',
  lightgrey: '#a1a1a1',
  white: '#fff',
  'white/transparent': '#fffb',
  primary: '#ed3330',
  secondary: '#50a6d7',
  // error colors
  error: '#ff9494',
  lighterror: '#fff5f5',
};

//--> Space
const space: any = [0, 4, 8, 16, 32, 64, 128, 256, 512];

// aliases
space.NONE = space[0];
space.XS = space[1];
space.S = space[2];
space.M = space[3];
space.L = space[4];
space.XL = space[5];
space.XXL = space[6];
space.XXXL = space[7];

//--> FontSizes
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fontSizes: any = [12, 14, 16, 18, 20, 24, 32, 48, 72];

// aliases
fontSizes.XXS = fontSizes[0];
fontSizes.XS = fontSizes[1];
fontSizes.S = fontSizes[2];
fontSizes.M = fontSizes[3];
fontSizes.L = fontSizes[4];
fontSizes.XL = fontSizes[5];
fontSizes.XXL = fontSizes[6];

//--> LineHeight
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lineHeights: any = [
  '16px',
  '18px',
  '20px',
  '22px',
  '24px',
  '28px',
  '46px',
  '52px',
  '76px',
];

// aliases
lineHeights.XXS = lineHeights[0];
lineHeights.XS = lineHeights[1];
lineHeights.S = lineHeights[2];
lineHeights.M = lineHeights[3];
lineHeights.L = lineHeights[4];
lineHeights.XL = lineHeights[5];
lineHeights.XXL = lineHeights[5];

//--> Shadows
const shadows = {
  light: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  medium: '5px 40px -10px rgba(0, 0, 0, 0.57)',
  heavy: '0px 4px 8px rgba(0, 0, 0, 0.45)',
};

export default {
  breakpoints,
  colors,
  space,
  fontSizes,
  shadows,
  lineHeights,
};
