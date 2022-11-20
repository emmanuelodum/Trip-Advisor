import React from 'react';
import { CircularProgress, Grid, Typograghy, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles'

const List = () => {

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typograghy variant='h4'>Restaurants, Hotel & Attraction around you</Typograghy>
    </div>
  )
}

export default List;