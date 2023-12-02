import { ReactNode } from 'react';

import { Stack } from '@mui/material';

export interface SectionContentProps {
  children: ReactNode;
}

export default function SectionContent({
  children,
}: SectionContentProps) {
  return (
    <Stack alignItems="center" justifyContent="center">
      {children}
    </Stack>
  );
}
