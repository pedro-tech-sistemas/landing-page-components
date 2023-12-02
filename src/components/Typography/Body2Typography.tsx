import { Typography, TypographyProps } from '@mui/material';

export default function Body2Typography(props: TypographyProps) {
  return (
    <Typography variant="body2" {...props}>{props.children}</Typography>
  );
}
