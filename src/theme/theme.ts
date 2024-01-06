import { createTheme } from '@mui/material/styles'

// import '../fonts/@index'
import { grey } from '@mui/material/colors'
import colors from '../constants/colors'

// eslint-disable-next-line import/no-mutable-exports
let theme = createTheme()

theme = createTheme(theme, {
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    allVariants: {
      color: grey[900],
    },
    h1: {
      fontSize: '72px',
      fontWeight: '700',
      lineHeight: '85px',
      wordBreak: 'break-word',
      [theme.breakpoints.down('md')]: {
        fontSize: '48px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '36px',
      },
    },
    h2: {
      fontSize: '48px',
      fontWeight: '700',
      lineHeight: '48px',
      [theme.breakpoints.down('md')]: {
        fontSize: '36px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '30px',
      },
    },
    h3: {
      fontSize: '32px',
      fontWeight: '700',
      lineHeight: 'auto',
      [theme.breakpoints.down('md')]: {
        fontSize: '28px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '24px',
      },
    },
    h4: {
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: 'auto',
      [theme.breakpoints.down('md')]: {
        fontSize: '22px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
      },
    },
    h5: {
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: 'auto',
      [theme.breakpoints.down('md')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
      },
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins',
        },
      },
    },
  },
  palette: {
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
    },
    secondary: {
      main: colors.secondary.main,
    },
  },
})

export default theme
