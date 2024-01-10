import { Box, Stack } from '@mui/material'
import { CSSProperties, ReactNode } from 'react'

export interface SmallSectionWithVideoProps {
  videoSrc: string
  height?: CSSProperties['height']
  children: ReactNode
}

const SmallSectionWithVideo = ({
  videoSrc,
  height = '50vh',
  children,
}: SmallSectionWithVideoProps) => {
  return (
    <Stack
      height={height}
      alignItems='center'
      justifyContent='center'
      sx={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        src={videoSrc}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'primary.main',
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      <Box p={2} sx={{ position: 'relative', zIndez: 1 }}>
        {children}
      </Box>
    </Stack>
  )
}

export default SmallSectionWithVideo
