import React, { CSSProperties, ReactElement, ReactNode } from 'react'

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
  useScrollTrigger,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import CTAButton from '../buttons/CTAButton/CTAButton'

export interface HeaderProps {
  logo?: string
  links: {
    label: string
    url: string
  }[]
  textColor?: CSSProperties['color']
  ctaButtonLabel?: string
  ctaButtonAction?: () => void
  ctaButtonIcon?: ReactNode
}

function ElevationScroll({ children }: { children: ReactElement }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window || undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const Header = ({
  logo,
  links,
  textColor,
  ctaButtonAction,
  ctaButtonLabel,
  ctaButtonIcon,
}: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const container = window !== undefined ? () => window.document.body : undefined

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <IconButton sx={{ position: 'absolute', right: '12px', top: '12px' }}>
        <CloseIcon />
      </IconButton>

      <Box mt={2}>
        <img src={logo} alt='logo' style={{ height: 'auto', width: '180px' }} />
      </Box>

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
      <ElevationScroll>
        <AppBar color='primary'>
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
                  sx={{ p: '8px 24px', ml: 1, maxWidth: 'fit-content' }}
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
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleDrawerToggle}
                color='inherit'
              >
                <MenuIcon />
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
      </ElevationScroll>

      <Box id='Spacing' width='100%' height='80px' />
    </>
  )
}

export default Header
