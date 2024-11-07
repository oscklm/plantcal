export const colors = {
  green: {
    '50': '#f5fee7',
    '100': '#e8fccb',
    '200': '#d2f99d',
    '300': '#b6f36a',
    '400': '#95e734',
    '500': '#75cd15',
    '600': '#59a40c',
    '700': '#447c0f',
    '800': '#396212',
    '900': '#315314',
    '950': '#172e05',
  },
  blue: {
    '50': '#f0f9ff',
    '100': '#e0f2fe',
    '200': '#bae6fd',
    '300': '#95dbfc',
    '400': '#39bdf7',
    '500': '#0fa6e8',
    '600': '#0384c6',
    '700': '#0469a0',
    '800': '#085984',
    '900': '#0d4a6d',
    '950': '#082f49',
  },
  purple: {
    '50': '#f9f5ff',
    '100': '#f2e8ff',
    '200': '#e7d4ff',
    '300': '#c9a0ff',
    '400': '#b982fe',
    '500': '#9f53f9',
    '600': '#8931ec',
    '700': '#7420d0',
    '800': '#631faa',
    '900': '#521b88',
    '950': '#360665',
  },
  darkGray: {
    '50': '#f6f6f9',
    '100': '#ecedf2',
    '200': '#d6d7e1',
    '300': '#b1b4c8',
    '400': '#878ca9',
    '500': '#686f8f',
    '600': '#535876',
    '700': '#444860',
    '800': '#3b3e51',
    '900': '#343645',
    '950': '#23242e',
  },
  gray: {
    '50': '#f6f7f9',
    '100': '#ecedf2',
    '200': '#d5d8e2',
    '300': '#afb5ca',
    '400': '#848eac',
    '500': '#656f92',
    '600': '#505879',
    '700': '#424862',
    '800': '#393e53',
    '900': '#333747',
    '950': '#232531',
  },
};

export const typography = {
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  caption: {
    fontSize: 12,
    fontWeight: 'normal',
  },
} as const;

export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
} as const;

export const sharedConfig = {
  typography,
  shadows,
  spacing: (value: number) => value * 4,
} as const;

export const sharedColors = {
  primary: colors.green['500'],
  primaryLight: colors.green['400'],
  primaryDark: colors.green['600'],
  secondary: colors.blue['500'],
  secondaryLight: colors.blue['400'],
  secondaryDark: colors.blue['600'],
  accent: colors.purple['500'],
  accentLight: colors.purple['400'],
  accentDark: colors.purple['600'],
};

export const themes = {
  light: {
    colors: {
      ...sharedColors,
      card: colors.darkGray['50'],
      cardMuted: colors.darkGray['50'],
      cardForeground: colors.darkGray['200'],
      background: colors.gray['50'],
      text: '#000',
    },
    ...sharedConfig,
  },
  dark: {
    colors: {
      ...sharedColors,
      card: colors.darkGray['800'],
      cardMuted: colors.darkGray['50'],
      cardForeground: colors.darkGray['200'],
      background: colors.gray['950'],
      text: '#fff',
    },
    ...sharedConfig,
  },
};
