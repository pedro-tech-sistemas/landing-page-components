import { CSSProperties, ReactNode } from 'react';

import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export interface FoodCardImageOverflowProps {
  items: string[];
  renderItems: ((items: string[]) => ReactNode)
  title: string;
  imgUrl: string;
  extraInfo?: string;
  bottomTextLabel?: string;
  bottomTextColor?: CSSProperties['color'];
}

export default function FoodCardImageOverflow({
  renderItems,
  items,
  title,
  imgUrl,
  extraInfo,
  bottomTextLabel,
  bottomTextColor,
}: FoodCardImageOverflowProps) {
  const content = renderItems ? renderItems(items) : (
    items.map((item) => (
      <Typography
        key={item}
        color="text.secondary"
        fontWeight={500}
        textAlign="center"
      >
        {item}
      </Typography>
    ))
  );

  return (
    <Box sx={{ position: 'relative', width: 'fit-content', display: 'inline-block' }}>
      <Box
        src={imgUrl}
        component="img"
        sx={{
          width: 258,
          height: 258,    
          position: 'absolute',
          objectFit: 'cover',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 999,
          borderRadius: '30px',
        }}
      />

      <Card
        sx={{
          maxWidth: 320,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: '210px',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, .2)',
          borderRadius: '15px',
        }}
      >
        <CardHeader
          title={title}
          titleTypographyProps={{
            fontSize: 32,
            fontWeight: 700,
            textTransform: 'uppercase',
            color: 'text.secondary',
          }}
          sx={{ marginTop: '42px' }}
        />

        <CardContent>
          {content}

          {extraInfo && (
            <Typography
              mt={2}
              fontWeight={700}
              textTransform="uppercase"
              textAlign="center"
            >
              {extraInfo}
            </Typography>
          )}
        </CardContent>

        {bottomTextLabel && (
          <Box
            sx={{
              position: 'absolute',
              bottom: -34,
              bgcolor: bottomTextColor || 'primary.main',
              width: '70%',
              height: '28px',
              borderBottomLeftRadius: '30px',
              borderBottomRightRadius: '30px',
              borderColor: grey[800],
              borderTopStyle: 'dashed',
              borderWidth: '3px',
            }}
          >
            <Typography
              textAlign="center"
              fontWeight={700}
              textTransform="uppercase"
              color={grey[50]}
              letterSpacing="1px"
            >
              {bottomTextLabel}
            </Typography>
          </Box>
        )}
      </Card>
    </Box>
  );
}
