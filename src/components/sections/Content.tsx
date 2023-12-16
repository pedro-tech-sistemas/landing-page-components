import { ReactNode } from 'react'

import { Stack } from '@mui/material'

export interface ContentProps {
  children: ReactNode
}

const Content = ({ children }: ContentProps) => {
  return (
    <Stack alignItems='center' justifyContent='center'>
      {children}
    </Stack>
  )
}

export default Content