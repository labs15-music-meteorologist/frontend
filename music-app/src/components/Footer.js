import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import '../App.css';
// import { textAlign } from '@material-ui/system';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 0,
    width: '100%',
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <footer className='footer'>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='white'
          /* textColor='white' */
          centered>
          <Tab
            label='About'
            value='/dashboard'
            component={Link}
            to='/dashboard'
          />
          <Tab
            label='Github'
            href='https://github.com/labs15-music-meteorologist/frontend'
            target='_blank'
          />
          <Tab
            label='Contact'
            href='https://github.com/Dstar4'
            target='_blank'
          />
        </Tabs>
        <Tabs centered>
          <p style={{ fontSize: 14 }}>
            &copy; Copyright 2019, Music Meteorologist
          </p>
        </Tabs>
      </Paper>
    </footer>
  );
}
