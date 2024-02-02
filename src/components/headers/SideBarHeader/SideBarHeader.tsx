import { CSSProperties, ReactNode } from 'react'
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import CTAButton from 'src/components/buttons/CTAButton/CTAButton'
import MobileHeader, { MobileHeaderProps } from '../common/MobileHeader'

export type SideBarHeaderProps = MobileHeaderProps & {
  textColor?: CSSProperties['color']
  ctaButtonLabel?: string
  ctaButtonAction?: () => void
  ctaButtonIcon?: ReactNode
  bgcolor?: CSSProperties['backgroundColor']
  isDarkBackground?: boolean
  copy?: ReactNode
}

const SideBarHeader = ({
  links,
  bgcolor = 'primary.main',
  ctaButtonAction,
  ctaButtonIcon,
  ctaButtonLabel,
  logo,
  textColor = 'whitesmoke',
  isDarkBackground = true,
  copy,
}: SideBarHeaderProps) => {
  return (
    <>
      <Box
        sx={{
          boxSizing: 'border-box',
          display: { xs: 'none', lg: 'block' },
          position: 'fixed',
          height: '100%',
          width: 280,
          top: 0,
          zIndex: 999,
          bgcolor,
        }}
      >
        <Stack justifyContent='space-between' alignItems='center' my={2} height='100%'>
          <Box
            sx={{
              maxWidth: '120px',
              height: 'auto',
            }}
          >
            {logo && (
              <img
                src={logo}
                alt='logo'
                style={{ height: 'auto', width: '100%', objectFit: 'contain' }}
              />
            )}
          </Box>

          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            {links.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton href={link.url} sx={{ textAlign: 'center' }}>
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      color: textColor,
                      fontWeight: 'medium',
                      textTransform: 'uppercase',
                      fontSize: 14,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            {ctaButtonAction && ctaButtonLabel && (
              <CTAButton
                sx={{ fontWeight: 600, p: '8px 24px', maxWidth: '100%', mt: 4 }}
                onClick={ctaButtonAction}
                endIcon={ctaButtonIcon}
                color='secondary'
              >
                {ctaButtonLabel}
              </CTAButton>
            )}
          </List>

          <Box>
            {copy && <Box mb={3}>{copy}</Box>}

            <Box display='flex' flexDirection='column' alignItems='center'>
              <Typography color={textColor} textAlign='center' mb='-1rem'>
                Design by
              </Typography>

              <Link
                href='https://api.whatsapp.com/send?phone=5519989242888'
                underline='none'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={
                    isDarkBackground
                      ? '/assets/images/logobranco.png'
                      : '/assets/images/logoazulescuro.png'
                  }
                  style={{ background: 'transparent' }}
                  alt='logo'
                  width='100'
                  height='auto'
                />
              </Link>
            </Box>
          </Box>
        </Stack>
      </Box>

      <MobileHeader links={links} logo={logo} smBreakpoint='lg' />
    </>
  )
}

export default SideBarHeader
