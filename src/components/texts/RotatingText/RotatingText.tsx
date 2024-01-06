import { Box, Typography, TypographyProps } from '@mui/material'
import { useState, useEffect } from 'react'

export interface RotatingTextProps extends TypographyProps {
  words: string[]
  ariaLabel?: string
}

const RotatingText = ({ words, ariaLabel, ...restProps }: RotatingTextProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <Box
      style={{ height: '50px', overflow: 'hidden', position: 'relative' }}
      role='status'
      aria-live='polite'
      aria-label={ariaLabel}
    >
      {words.map((word, i) => (
        <Typography
          key={word}
          style={{
            position: 'absolute',
            bottom: `${(index - i) * 100}%`,
            transition: 'bottom 0.5s',
          }}
          {...restProps}
        >
          {word}
        </Typography>
      ))}
    </Box>
  )
}

export default RotatingText
