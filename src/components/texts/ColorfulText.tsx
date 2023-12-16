import { CSSProperties } from 'react';

import { Typography, TypographyProps } from '@mui/material';
import { keyframes } from '@emotion/react';

export interface ColorfulTextProps extends TypographyProps {
  hasAnimation?: boolean;
  colors: CSSProperties['color'][];
}

export default function ColorfulText({
  hasAnimation = false,
  colors,
  children,
  sx,
  ...restProps
}: ColorfulTextProps) {

  const gradient = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `;

  return (
    <Typography
      sx={{
        fontSize: 80,
        letterSpacing: 1,
        fontWeight: '700',
        backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundSize: '300% 300%',
        animation: hasAnimation ? `${gradient} 6s ease-in-out infinite` : '',
        width: 'fit-content',
        ...sx,
      }}
      {...restProps}
    >
      {children}
    </Typography>
  )
}