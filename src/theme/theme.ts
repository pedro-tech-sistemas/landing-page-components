import { createTheme } from '@mui/material/styles';

import '../fonts';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(','),
    allVariants: {
      color: '#333333',
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
});
