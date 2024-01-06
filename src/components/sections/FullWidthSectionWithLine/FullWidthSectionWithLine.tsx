import { Box, BoxProps, Container, Divider } from '@mui/material'
import { grey } from '@mui/material/colors'
import { CSSProperties } from 'react'

export interface FullWidthSectionWithLineProps extends BoxProps {
  title: string
  titleColor: CSSProperties['color']
}

const FullWidthSectionWithLine = ({
  title,
  bgcolor = 'primary.main',
  titleColor = grey[900],
  children,
  ...restProps
}: FullWidthSectionWithLineProps) => {
  return (
    <Box width='100%' bgcolor={bgcolor} {...restProps}>
      <Divider
        textAlign='left'
        sx={{
          typography: 'h3',
          color: titleColor,
          '&::before, &::after': {
            borderWidth: '2px',
            borderColor: titleColor,
            opacity: 0.5,
          },
        }}
      >
        {title}
      </Divider>

      <Container maxWidth='lg'>{children}</Container>
    </Box>
  )
}

export default FullWidthSectionWithLine
