import { ReactNode } from 'react'
import { Stack, StackProps } from '@mui/material'

export interface CenteredProps extends StackProps {
  align: 'row-start' | 'row-center' | 'row-end' | 'column-start' | 'column-center' | 'column-end'
  children: ReactNode
}

const Centered = ({ align = 'column-center', children, ...restProps }: CenteredProps) => {
  const isColumn = align.startsWith('column')
  const isCenter = align.endsWith('center')
  const isEnd = align.endsWith('end')

  const direction = isColumn ? 'column' : 'row'
  // eslint-disable-next-line no-nested-ternary
  const alignItems = isCenter ? 'center' : isEnd ? 'end' : 'start'

  return (
    <Stack direction={direction} alignItems={alignItems} {...restProps}>
      {children}
    </Stack>
  )
}

export default Centered
