import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ANCHOR, NAVBAR_ITEMS, NAVBAR_WIDTH } from './Navbar.constants';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(open);
    };

  return (
    <Grid item xs={12}>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon/>
      </Button>
      <SwipeableDrawer
        anchor={ANCHOR}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{ width: NAVBAR_WIDTH }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {NAVBAR_ITEMS.map(({
              id,
              icon,
              label,
              route
            }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton onClick={()=>{navigate(route);}}>
                  <ListItemIcon>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>  
    </Grid>
  );
};