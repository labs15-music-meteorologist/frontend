import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 0,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='white'
        textColor='white'
        centered>
        <Tab label='About' />
        <Tab label='Github' />
        <Tab label='Contact' />
      </Tabs>
      <Tabs centered>
        <p style={{fontSize: 14}}>&copy; Copyright 2019, Music Meteorologist</p>
      </Tabs>
    </Paper>
  );
}
