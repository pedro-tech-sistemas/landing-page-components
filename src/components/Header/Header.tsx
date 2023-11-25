import React, { CSSProperties } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export interface HeaderProps {
  logo?: string;
  links: {
    label: string;
    url: string;
  }[];
  textColor?: CSSProperties['color'];
  window?: () => Window;
}

export default function Header({
  logo,
  links,
  textColor,
  window,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <IconButton sx={{ position: 'absolute', right: '12px', top: '12px' }}>
        <CloseIcon />
      </IconButton>

      <Box mt={2}>
        <img src={logo} />
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
  );

  return (
    <Stack
      component="nav"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {logo && (
        <img src={logo} />
      )}

      <List sx={{ display: { xs: 'none', md: 'flex' }, py: 0 }}>
        {links.map((link) => (
          <ListItem
            key={link.label}
            disablePadding
            sx={{ width: 'auto' }}
          >
            <ListItemButton href={link.url} sx={{ textAlign: 'center' }}>
              <ListItemText primary={link.label} primaryTypographyProps={{ color: textColor }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleDrawerToggle}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          container={container}
          variant="temporary"
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
    </Stack>
  )
}