import { ReactNode } from 'react'

import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Link, Stack, StackProps, SxProps, Tooltip, Typography } from '@mui/material'

type SocialMedia = 'facebook' | 'instagram' | 'linkedin' | 'twitter'

export interface BasicFooterProps extends StackProps {
  copy: string
  links: {
    labelText: string
    href: string
  }[]
  socialLinks?: {
    icon: SocialMedia
    url: string
  }[]
  otherLeftOptions?: ReactNode
  otherRightOptions?: ReactNode
  hasBorder?: boolean
}

const BasicFooter = ({
  copy,
  links,
  socialLinks,
  otherLeftOptions,
  otherRightOptions,
  padding = '48px',
  hasBorder = true,
  ...rest
}: BasicFooterProps) => {
  const linkStyles: SxProps = {
    color: 'unset',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  }

  const commonTypographyProps = {
    fontWeight: 'light',
    fontSize: '1rem',
    color: 'grey.100',
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

  return (
    <Stack
      p={padding}
      justifyContent='space-between'
      alignItems='center'
      rowGap={2}
      sx={{
        borderTop: hasBorder ? '2px solid' : '',
        borderColor: 'primary.light',
        flexDirection: { xs: 'column', md: 'row' },
        bgcolor: 'primary.main',
        color: 'grey.100',
        ...rest.sx,
      }}
      {...rest}
    >
      <Stack direction='row' divider={<span>·</span>} spacing={2}>
        <Typography {...commonTypographyProps}>© {copy}</Typography>

        {links?.map(({ labelText, href }) => (
          <Link key={`${labelText}-${labelText}`} href={href} sx={linkStyles}>
            <Typography {...commonTypographyProps}>{labelText}</Typography>
          </Link>
        ))}

        {otherLeftOptions}
      </Stack>

      <Stack direction='row' spacing={2}>
        {otherRightOptions}

        {socialLinks?.map(({ icon, url }) => (
          <Tooltip title={icon} key={icon}>
            <Link key={icon} href={url} sx={linkStyles}>
              {renderIcon(icon)}
            </Link>
          </Tooltip>
        ))}
      </Stack>
    </Stack>
  )
}

export default BasicFooter
