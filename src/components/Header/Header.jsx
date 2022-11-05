import React from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputeBase, Box  } from '@material-ui/core';
import searchIcon from '@material-ui/icons';

const Header = () => {
  return (
    <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h5' className={classes.title}>
            Travel Advisor
          </Typography>
          <Box display="flex">
            <Typography variant='h6' className={classes.title}>
              Explore New Places
            </Typography>
            <Autocomplete>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
              </div>
              <InputeBase  placeholder="search..." classes{{}} />
              </div>
            </Autocomplete>
          </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header;