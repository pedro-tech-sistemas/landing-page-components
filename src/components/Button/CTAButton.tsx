import React from 'react';
import { Button, ButtonProps } from '@mui/material';

export interface CTAButtonProps extends ButtonProps {}

export default function CTAButton({ children, sx, ...rest }: CTAButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: '2rem',
        maxWidth: '40%',
        fontSize: '0.875rem',
        textTransform: 'none',
        padding: '16px 48px',
        ...sx
      }}
      fullWidth
      {...rest}
    >
      {children}
    </Button>
  );
}
