import React, { CSSProperties, ReactNode } from 'react';

import { Box, Container, Divider, Stack } from '@mui/material';

export interface SectionProps {
  height?: CSSProperties['height'];
  hasBorderTop?: boolean;
  hasBorderBottom?: boolean;
  imgUrl?: string;
  children: ReactNode;
}

export default function Section({
  height = '100vh',
  hasBorderTop,
  hasBorderBottom,
  imgUrl,
  children,
}: SectionProps) {
  return (
    <Stack rowGap={4}>
      {hasBorderTop && (
        <Divider sx={{ borderWidth: '2px' }} />
      )}

      <Box
        width="100%"
        height={height}
        sx={{ 
          backgroundImage: imgUrl ? `url(${imgUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container maxWidth="lg">
          <Stack rowGap={4}>
            {children}
          </Stack>
        </Container>
      </Box>

      {hasBorderBottom && (
        <Divider sx={{ borderWidth: '2px' }} />
      )}
    </Stack>
  );
}
