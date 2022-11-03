import React from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputeBase, Box  } from '@material-ui/core';
import classNames from 'classnames';

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Toolbar className={classNames.toolbar}>
          <Typography variant='h5' className={classes.title}>
            Travel Advisor
          </Typography>
          <Box display="flex">
            <Typography variant='h6' className={classes.title}>
            Explore New Places
          </Typography>
          </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;