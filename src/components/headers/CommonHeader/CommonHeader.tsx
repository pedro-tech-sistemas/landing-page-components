import { CSSProperties, ReactNode, useState } from 'react'

import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import CTAButton from 'src/components/buttons/CTAButton/CTAButton'
import useHideOnScroll from 'src/hooks/useHideOnScroll'

export interface CommonHeaderProps {
  logo?: string
  links: {
    label: string
    url: string
  }[]
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
  const [mobileOpen, setMobileOpen] = useState(false)

  const theme = useTheme()
  const primaryColor = theme.palette.primary.main || bgcolor
  const appBarBgColor = hasGradientBackground
    ? `linear-gradient(${primaryColor} 46%, rgba(0, 0, 0, 0) 100%)`
    : primaryColor

  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState)

  const container = window !== undefined ? () => window.document.body : undefined

  const shouldHide = useHideOnScroll(hideOnScrollDown)

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <IconButton sx={{ position: 'absolute', right: '12px', top: '12px' }}>
        <CloseIcon />
      </IconButton>

      <List>
        {links.map((link) => (
          <ListItem key={link.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={link.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

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
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
              />
            </Box>
          )}

          <List sx={{ display: { xs: 'none', md: 'flex' } }}>
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleDrawerToggle}
              color='inherit'
              aria-label='Ver menu'
            >
              <MenuIcon color='secondary' />
            </IconButton>

            <Drawer
              container={container}
              variant='temporary'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Container>
      </AppBar>

      <Box id='Spacing' width='100%' height='80px' />
    </>
  )
}

export default CommonHeader
