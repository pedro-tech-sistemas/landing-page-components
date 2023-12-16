import { CSSProperties, ReactNode } from 'react'

import { Box, Container as MUIContainer, Divider, Stack } from '@mui/material'

export interface ContainerProps {
  height?: CSSProperties['height']
  hasBorderTop?: boolean
  hasBorderBottom?: boolean
  imgUrl?: string
  children: ReactNode
}

const Container = ({
  height = '100vh',
  hasBorderTop,
  hasBorderBottom,
  imgUrl,
  children,
}: ContainerProps) => {
  return (
    <Stack rowGap={4}>
      {hasBorderTop && <Divider sx={{ borderWidth: '2px' }} />}

      <Box
        width='100%'
        height={height}
        sx={{
          backgroundImage: imgUrl ? `url(${imgUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <MUIContainer maxWidth='lg'>
          <Stack rowGap={4}>{children}</Stack>
        </MUIContainer>
      </Box>

      {hasBorderBottom && <Divider sx={{ borderWidth: '2px' }} />}
    </Stack>
  )
}

export default Container
