import { Theme, createTheme } from '@mui/material/styles'

import { grey } from '@mui/material/colors'
import createBreakpoints from '@mui/system/createTheme/createBreakpoints'
import { deepmerge } from '@mui/utils'
import colors from '../constants/colors'

export default function getMyCustomTheme(customTheme: Theme) {
  const breakpoints = createBreakpoints({})

  const defaultTheme = createTheme({
    typography: {
      fontFamily: ['unset'].join(','),
      allVariants: {
        color: grey[900],
      },
      h1: {
        fontSize: '72px',
        fontWeight: '700',
        lineHeight: '85px',
        wordBreak: 'break-word',
        [breakpoints.down('md')]: {
          fontSize: '48px',
        },
        [breakpoints.down('sm')]: {
          fontSize: '36px',
        },
      },
      h2: {
        fontSize: '48px',
        fontWeight: '700',
        lineHeight: '48px',
        [breakpoints.down('md')]: {
          fontSize: '36px',
        },
        [breakpoints.down('sm')]: {
          fontSize: '30px',
        },
      },
      h3: {
        fontSize: '32px',
        fontWeight: '700',
        lineHeight: 'auto',
        [breakpoints.down('md')]: {
          fontSize: '28px',
        },
        [breakpoints.down('sm')]: {
          fontSize: '24px',
        },
      },
      h4: {
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: 'auto',
        [breakpoints.down('md')]: {
          fontSize: '22px',
        },
        [breakpoints.down('sm')]: {
          fontSize: '20px',
        },
      },
      h5: {
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: 'auto',
        [breakpoints.down('md')]: {
          fontSize: '18px',
        },
        [breakpoints.down('sm')]: {
          fontSize: '16px',
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

  return createTheme(deepmerge(defaultTheme, customTheme))
}
