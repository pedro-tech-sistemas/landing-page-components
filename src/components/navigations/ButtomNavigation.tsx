import { ReactElement, useState } from 'react';

import { BottomNavigation, BottomNavigationAction, BottomNavigationActionProps, Paper, PaperProps } from '@mui/material';

export interface ButtonNavigationProps extends PaperProps {
  contentComponents: ReactElement[];
  buttons: BottomNavigationActionProps[];
}

export default function ButtonNavigation({
  contentComponents,
  buttons,
  ...rest
}: ButtonNavigationProps) {
  const [value, setValue] = useState(0);

  return (
    <Paper
      elevation={3}
      sx={{
        boxShadow: 'none',
        ...rest.sx,
      }}
      {...rest}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        {buttons.map(({ label, icon, }) => (
          <BottomNavigationAction
            label={label}
            icon={icon}
            sx={{
              flexDirection: 'row',
              columnGap: 1,
            }}  
          />
        ))}
      </BottomNavigation>

      {contentComponents[value]}
    </Paper>
  );
}
