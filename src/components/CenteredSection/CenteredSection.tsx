import React from 'react';
import { Container, Stack, StackProps, Typography } from '@mui/material';

export interface CenteredSectionProps extends StackProps {
  title: string;
  subtitle?: string;
  isH1?: boolean;
}

export default function CenteredSection({
  title,
  subtitle,
  isH1 = false,
  ...rest
}: CenteredSectionProps) {
  return (
    <Stack {...rest}>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Typography
            variant={isH1 ? 'h1' : 'h2'}
          >
            {title}
          </Typography>

          <Typography
            variant={isH1 ? 'h2' : 'h3'}
          >
            {subtitle}
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
}
