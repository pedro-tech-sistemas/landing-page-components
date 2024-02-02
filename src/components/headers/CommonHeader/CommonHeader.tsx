import { CSSProperties, ReactNode } from 'react'

import { AppBar, Box, Container, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CTAButton from '../../buttons/CTAButton/CTAButton'
import useHideOnScroll from '../../../hooks/useHideOnScroll'
import MobileHeader, { MobileHeaderProps } from '../common/MobileHeader'

export type CommonHeaderProps = MobileHeaderProps & {
  textColor?: CSSProperties['color']
  ctaButtonLabel?: string
  ctaButtonAction?: () => void
  hideOnScrollDown?: boolean
  hasGradientBackground?: boolean
  ctaButtonIcon?: ReactNode
  bgcolor?: CSSProperties['backgroundColor']
}

const CommonHeader = ({
  logo,
  links,
  textColor,
  ctaButtonAction,
  ctaButtonLabel,
  ctaButtonIcon,
  hideOnScrollDown = false,
  hasGradientBackground = false,
  bgcolor,
}: CommonHeaderProps) => {
  const theme = useTheme()
  const primaryColor = theme.palette.primary.main || bgcolor
  const appBarBgColor = hasGradientBackground
    ? `linear-gradient(${primaryColor} 46%, rgba(0, 0, 0, 0) 100%)`
    : primaryColor

  const shouldHide = useHideOnScroll(hideOnScrollDown)

  return (
    <>
      <AppBar
        color='transparent'
        sx={{
          background: appBarBgColor,
          transform: shouldHide ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.3s',
        }}
        elevation={hasGradientBackground ? 0 : 1}
      >
        <Container
          maxWidth='lg'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 4,
            height: '80px',
          }}
        >
          {logo && (
            <Box
              sx={{
                width: 'auto',
                maxWidth: '100%',
                height: '100%',
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
              }}
            >
              <img
                src={logo}
                alt='logo'
                style={{ maxHeight: '60px', maxWidth: '100%', objectFit: 'contain' }}
              />
            </Box>
          )}

          <List sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {links.map((link) => (
              <ListItem key={link.label} disablePadding sx={{ width: 'auto' }}>
                <ListItemButton href={link.url} sx={{ textAlign: 'center' }}>
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{ color: textColor, fontWeight: 'medium' }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            {ctaButtonAction && ctaButtonLabel && (
              <CTAButton
                sx={{ fontWeight: 600, p: '8px 24px', ml: 1, maxWidth: 'fit-content' }}
                onClick={ctaButtonAction}
                endIcon={ctaButtonIcon}
                color='secondary'
              >
                {ctaButtonLabel}
              </CTAButton>
            )}
          </List>

          <MobileHeader links={links} logo={logo} />
        </Container>
      </AppBar>

      <Box id='Spacing' width='100%' height='80px' />
    </>
  )
}

export default CommonHeader
