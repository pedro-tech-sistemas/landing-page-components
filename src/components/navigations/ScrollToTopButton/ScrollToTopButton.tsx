import { Button, ButtonProps } from '@mui/material'
import { useEffect, useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { grey } from '@mui/material/colors'

export type ScrollToTopButtonProps = ButtonProps

const ScrollToTopButton = ({ sx, ...restProps }: ScrollToTopButtonProps) => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!showButton) return null

  return (
    <Button
      onClick={scrollToTop}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 0,
        zIndez: 1000,
        background: grey[400],
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        ...sx,
      }}
      {...restProps}
    >
      <ExpandLessIcon sx={{ color: grey[50] }} />
    </Button>
  )
}

export default ScrollToTopButton
