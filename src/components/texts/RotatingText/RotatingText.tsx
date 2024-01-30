import { Box, Typography, TypographyProps } from '@mui/material'
import { keyframes } from '@mui/system'

export interface RotatingTextProps extends TypographyProps {
  text: string
  words: string[]
  ariaLabel?: string
}

const generateSpinWordsAnimation = (wordCount: number) => {
  const keyframesPercentage = 100 / wordCount
  let keyframesString = ''

  for (let i = 0; i < wordCount; i += 1) {
    keyframesString += `
      ${keyframesPercentage * i}% { transform: translateY(-${100 * i}%); }
    `
  }

  return keyframes`${keyframesString}`
}

const RotatingText = ({ text, words, sx, ...restProps }: RotatingTextProps) => {
  const spinWordsAnimation = generateSpinWordsAnimation(words.length)

  return (
    <Box
      sx={{
        boxSizing: 'content-box',
        height: '60px',
        padding: '50px 30px',
        display: 'flex',
      }}
    >
      <Typography {...restProps} sx={{ whiteSpace: 'normal', overflowWrap: 'break-word', ...sx }}>
        {text}
      </Typography>

      <Box sx={{ overflow: 'hidden' }}>
        {words.map((word) => (
          <Typography
            key={word}
            sx={{
              display: 'block',
              height: '100%',
              paddingLeft: '10px',
              animation: `${spinWordsAnimation} ${words.length + 1}s infinite`,
              whiteSpace: 'normal',
              overflowWrap: 'break-word',
              ...sx,
            }}
            {...restProps}
          >
            {word}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

export default RotatingText
