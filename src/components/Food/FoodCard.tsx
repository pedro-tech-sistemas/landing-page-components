import { ReactNode } from 'react';

import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export interface FoodCardProps {
  // content: ReactNode;
  items: string[];
  renderItems: ((items: string[]) => ReactNode)
  footer: ReactNode;
  title: string;
  img?: string;
}

export default function FoodCard({
  // content,
  renderItems,
  items,
  footer,
  title,
  img,
}: FoodCardProps) {
  const content = renderItems ? renderItems(items) : (
    items.map((item) => (
      <Typography key={item}>{item}</Typography>
    ))
  );

  return (
    <Card>
      <CardHeader
        title={title}
        titleTypographyProps={{
          fontFamily: 'Denk One',
          textTransform: 'uppercase',
        }}
      />

      <CardContent>
        {}
        {items.map((item) => (
          <Typography key={item}>{item}</Typography>
        ))}
      </CardContent>
      
      {footer}
    </Card>
  );
}
