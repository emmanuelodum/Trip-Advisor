import React, { useState } from 'react';
import { CircularProgress, Grid, Typograghy, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles'

const List = () => {

  const classes = useStyles();
  const [type, setType] = useState('restaurants');

  return (
    <div className={classes.container}>
      <Typograghy variant='h4'>Restaurants, Hotel & Attraction around you</Typograghy>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restuarants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restuarants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default List;