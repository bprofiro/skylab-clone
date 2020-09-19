import { theme, DefaultTheme } from '@chakra-ui/core';

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Roboto, system-ui, snans-serif',
    heading: 'Roboto, system-ui, snans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },
  fontSizes: {
    ...theme.fontSizes,
    '6xl': '54px',
  },
  colors: {
    ...theme.colors,
    blue: {
      ...theme.colors.blue,
      500: '#0041C1'
    },
    gray: {
      ...theme.colors.gray,
      300: '#E2E7ED',
      600: '#6D7989',
      700: '#414A5B',
      800: '#1B2733'
    }
  }
}

export default customTheme;