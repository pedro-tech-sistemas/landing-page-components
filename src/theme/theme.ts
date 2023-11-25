import { createTheme } from '@mui/material/styles';

import '../fonts';
import { grey } from '@mui/material/colors';
import { colors } from '../constants/colors';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(','),
    allVariants: {
      color: grey[900],
    },
    h1: {
      fontSize: '4.5rem',
      fontWeight: '600',
      lineHeight: '85px',
      wordBreak: 'break-word',
    },
    h2: {
      fontSize: '1.375rem',
      fontWeight: '300',
      lineHeight: '40px',
      wordBreak: 'break-word',
    },
  },
  palette: {
    primary: {
      main: colors.primary.main,
      light: colors.primary.light
    },
    secondary: {
      main: colors.secondary.main,
    },
  },
});
