import { ReactNode } from 'react'

import { Box, Stack, StackProps } from '@mui/material'

export interface FullWidthWithImageProps extends StackProps {
  imageUrl: string
  children: ReactNode
}

const FullWidthWithImage = ({ imageUrl, children, ...rest }: FullWidthWithImageProps) => {
  return (
    <Stack
      sx={{
        flexDirection: { xs: 'column-reverse', md: 'row' },
        minHeight: { xs: 'unset', md: '100vh' },
      }}
      rowGap={2}
      {...rest}
    >
      <Box
        sx={{
          display: 'flex',
          width: { xs: '100%', md: '50%' },
          height: { xs: '50vh', md: 'auto' },
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      <Box
        maxWidth='50%'
        boxSizing='border-box'
        sx={{ maxWidth: { xs: '100%', md: '50%' }, p: { xs: 2, md: 8 } }}
      >
        {children}
      </Box>
    </Stack>
  )
}

export default FullWidthWithImage
