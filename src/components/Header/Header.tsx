import React, { CSSProperties, ReactElement } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  useScrollTrigger
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CTAButton from '../Button/CTAButton';

export interface HeaderProps {
  logo?: string;
  links: {
    label: string;
    url: string;
  }[];
  textColor?: CSSProperties['color'];
  ctaButton?: {
    label: string;
    action: () => void;
  };
  window?: () => Window;
}


function ElevationScroll({ children }: { children: ReactElement }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header({
  logo,
  links,
  textColor,
  ctaButton,
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
    <ElevationScroll>
      <AppBar
        color="inherit"
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 1,
          px: 1,
        }}
      >
        {logo && (
          <img src={logo} />
        )}

        <List
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
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

          {ctaButton && (
            <CTAButton
              sx={{ p: '8px 24px', ml: 1, width: 'fit-content' }}
              onClick={ctaButton.action}
            >
              {ctaButton?.label}
            </CTAButton>
          )}
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
      </AppBar>
    </ElevationScroll>
  )
}