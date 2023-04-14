import { extendTheme } from 'native-base'

export const THEME = extendTheme({
    colors: {
      gray: {
        100: '#F2F2F2',
        200: '#D9D9D9',
        300: '#808080',
        400: '#333333',
        500: '#262626',
        600: '#1A1A1A',
        700: '#0D0D0D',
        900: '#0D0D0D'
      },
      purple: {
        400: '#8284FA',
        500: '#5E60CE'
      },
      blue: {
        400: '#4EA8DE',
        500: '#1E6F9F',
      },
      red: {
        500: '#E25858'
      }
    },
    fonts: {
      heading: 'Inter_700Bold',
      body: 'Inter_400Regular',
    },
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
    },
    sizes: {
      14: 56,
      33: 148
    }
})