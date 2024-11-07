import { StyleSheet } from 'react-native-unistyles';
import { themes } from '@/styles/theme';

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = {
  light: typeof themes.light;
  dark: typeof themes.dark;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  breakpoints,
  themes: {
    light: themes.light,
    dark: themes.dark,
  },
});
