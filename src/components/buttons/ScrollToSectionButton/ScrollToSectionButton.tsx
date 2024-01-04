import { Button, ButtonProps } from '@mui/material'
import { MouseEvent } from 'react'

export interface ScrollToSectionButtonProps extends ButtonProps {}

const ScrollToSectionButton = ({ id, ...restProps }: ScrollToSectionButtonProps) => {
  const handleScroll = (e: MouseEvent<HTMLButtonElement>) => {
    if (!id) return

    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Button
      type='button'
      variant='contained'
      onClick={handleScroll}
      sx={{ fontWeight: 600 }}
      {...restProps}
    />
  )
}

export default ScrollToSectionButton
