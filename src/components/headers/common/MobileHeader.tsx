import { Box, Drawer, IconButton, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CustomDrawer from './Drawer'

export type MobileHeaderProps = {
  logo?: string
  links: {
    label: string
    url: string
  }[]
  smBreakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const MobileHeader = ({ links, logo, smBreakpoint = 'sm' }: MobileHeaderProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState)

  useEffect(() => {
    setContainer(window.document.body)
  }, [])

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', [smBreakpoint]: 'none' } }}>
      <Stack direction='row' px={1} justifyContent='space-between' alignItems='center' width='100%'>
        <Box>
          {logo && (
            <img
              src={logo}
              alt='logo'
              width='auto'
              style={{ width: '100%', maxHeight: '60px', background: 'transparent' }}
            />
          )}
        </Box>

        <Box>
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
        </Box>
      </Stack>

      <Drawer
        container={container}
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', [smBreakpoint]: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
        }}
      >
        <CustomDrawer links={links} logoSrc={logo || ''} handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </Box>
  )
}

export default MobileHeader
