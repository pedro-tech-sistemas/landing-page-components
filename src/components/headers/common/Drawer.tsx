import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export interface DrawerProps {
  handleDrawerToggle: () => void
  logoSrc: string
  links: {
    label: string
    url: string
  }[]
}

const Drawer = ({ handleDrawerToggle, logoSrc, links }: DrawerProps) => (
  <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%' }}>
    <IconButton sx={{ position: 'absolute', right: '12px', top: '12px' }}>
      <CloseIcon />
    </IconButton>

    <Stack justifyContent='center' alignItems='center' height='100%'>
      <List>
        {links.map((link) => (
          <ListItem key={link.label} disablePadding>
            <ListItemButton href={link.url} sx={{ textAlign: 'center' }}>
              <ListItemText primary={link.label} sx={{ textTransform: 'uppercase' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {logoSrc && (
        <img src={logoSrc} alt='Logo' width='160px' height='auto' style={{ marginTop: '16px' }} />
      )}
    </Stack>
  </Box>
)

export default Drawer
