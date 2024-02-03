import { WhatsApp } from '@mui/icons-material'
import { IconButton, Link } from '@mui/material'
import { grey } from '@mui/material/colors'

export interface WhatsappButtonProps {
  href: string
}

const WhatsappButton = ({ href }: WhatsappButtonProps) => {
  return (
    <IconButton
      aria-label='Chamar no Whatsapp'
      type='button'
      size='large'
      sx={{
        bgcolor: '#48C857',
        position: 'fixed',
        bottom: 16,
        left: 8,
        zIndex: 999,
        transition: 'transform 0.3s ease',
        '&: hover': {
          bgcolor: '#48C857',
          transform: 'scale(1.2)',
        },
      }}
    >
      <Link href={href} target='_blank' rel='noopener noreferrer' sx={{ display: 'inherit' }}>
        <WhatsApp sx={{ color: grey[50] }} />
      </Link>
    </IconButton>
  )
}

export default WhatsappButton
