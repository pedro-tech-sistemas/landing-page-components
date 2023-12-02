import React, { ReactNode } from 'react';
import { Stack, StackProps } from '@mui/material';

export interface CenteredSectionProps extends StackProps {
  align: 'row-start' | 'row-center' | 'row-end' | 'column-start' | 'column-center' | 'column-end';
  children: ReactNode;
}

export default function CenteredSection({
  align = 'column-center',
  children,
  ...restProps
}: CenteredSectionProps) {
  const isColumn = align.startsWith('column');
  const isCenter = align.endsWith('center');
  const isEnd = align.endsWith('end');

  const direction = isColumn ? 'column' : 'row';
  const alignItems = isCenter ? 'center' : isEnd ? 'end' : 'start';

  return (
    <Stack
      direction={direction}
      alignItems={alignItems}
      {...restProps}
    >
      {children}
    </Stack>
  );
}
