import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Container, Divider, Link, Stack, Tooltip, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { CSSProperties } from 'react'
import { SocialMedia } from 'src/@types/SocialMedia'

export type FooterWithLogoProps = {
  bgColor?: CSSProperties['backgroundColor']
  textColor?: CSSProperties['color']
  logoSrc: string
  copy?: string
  centerText?: string
  socialLinks?: {
    icon: SocialMedia
    url: string
  }[]
  isDarkBackground?: boolean
}

const renderIcon = (icon: 'facebook' | 'instagram' | 'linkedin' | 'twitter') => {
  switch (icon) {
    case 'facebook':
      return <Facebook />
    case 'instagram':
      return <Instagram />
    case 'linkedin':
      return <LinkedIn />
    case 'twitter':
      return <Twitter />
    default:
      return null
  }
}

const FooterWithLogo = ({
  copy,
  logoSrc,
  centerText,
  socialLinks,
  bgColor = 'primary.main',
  textColor = grey[50],
  isDarkBackground = true,
}: FooterWithLogoProps) => {
  return (
    <Box bgcolor={bgColor}>
      <Container maxWidth='lg'>
        <Stack
          component='footer'
          justifyContent='space-between'
          alignItems='center'
          rowGap={2}
          py={5}
          spacing={2}
          divider={
            <Divider flexItem variant='middle' sx={{ borderColor: textColor, opacity: 0.5 }} />
          }
        >
          <Stack direction='row' justifyContent='space-between' alignItems='center' width='100%'>
            <Box sx={{ maxWidth: '70px' }}>
              <img
                src={logoSrc}
                alt='Logo'
                style={{ width: '100%', height: 'auto', background: 'transparent' }}
              />
            </Box>

            <Typography
              variant='body2'
              fontWeight={500}
              sx={{ display: { xs: 'none', sm: 'block' } }}
              color={textColor}
            >
              {centerText}
            </Typography>

            <Box display='flex' columnGap={2}>
              {socialLinks?.map(({ icon, url }) => (
                <Tooltip title={icon} key={icon}>
                  <Link key={icon} href={url} target='_blank'>
                    <Typography color={textColor}>{renderIcon(icon)}</Typography>
                  </Link>
                </Tooltip>
              ))}
            </Box>
          </Stack>

          <Stack
            justifyContent='space-between'
            width='100%'
            rowGap={2}
            alignItems='center'
            color={textColor}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            {copy && (
              <Typography variant='body2' textAlign='center' color={textColor}>
                © {copy}
              </Typography>
            )}

            <Link
              href='https://api.whatsapp.com/send?phone=5519989242888'
              underline='none'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant='body2' color={textColor} mr={0.5}>
                  Feito por:
                </Typography>

                <Box sx={{ maxWidth: '40px', display: 'grid' }}>
                  <img
                    src={
                      isDarkBackground
                        ? '/assets/images/logobranco.png'
                        : '/assets/images/logoazulescuro.png'
                    }
                    alt='Logo'
                    style={{ width: '100px', height: 'auto', background: 'transparent' }}
                  />
                </Box>
              </Box>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default FooterWithLogo
