import { CSSProperties, ReactNode } from 'react'

import { Box, Stack, StackProps } from '@mui/material'

export interface FullWidthWithImageProps extends StackProps {
  imageUrl: string
  height?: CSSProperties['height']
  children: ReactNode
}

const FullWidthWithImage = ({
  imageUrl,
  height = '100vh',
  sx,
  children,
  ...rest
}: FullWidthWithImageProps) => {
  return (
    <Stack
      sx={{
        flexDirection: { xs: 'column-reverse', md: 'row' },
        height: { xs: '100vh', md: height },
        ...sx,
      }}
      rowGap={2}
      {...rest}
    >
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          width: { xs: '100%', md: '50%' },
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      <Box
        maxWidth='50%'
        boxSizing='border-box'
        flex={1}
        sx={{ maxWidth: { xs: '100%', md: '50%' }, p: { xs: 2, md: 8 } }}
      >
        {children}
      </Box>
    </Stack>
  )
}

export default FullWidthWithImage
