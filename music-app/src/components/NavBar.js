import React from 'react';
import Button from '@material-ui/core/Button';
import Auth from './Auth';
// import { flexbox } from '@material-ui/system';
import { Grid, Typography } from '@material-ui/core';
import MusicLogo from '../music-meteorologist-logo.png';

class NavBar extends React.Component {
  render() {
    return (
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='center'>
        <Grid item>
          <Button to='/' style={{ color: 'inherit' }}>
            Home
          </Button>
        </Grid>
        <Grid item>
          <img src={MusicLogo} style={{ height: 70 }} />
        </Grid>

        <Grid item>
          <Auth />
        </Grid>
      </Grid>
    );
  }
}

export default NavBar;
