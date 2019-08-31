import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import MusicLogo from '../assets/music-logo-new.png';

class NavBar extends React.Component {
  homeButton = e => {
    e.preventDefault();
    window.location.href = '/';
  };
  render() {
    return (
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='center'>
        <Grid item>
          <Button
            to='/'
            style={{ color: 'inherit' }}
            onClick={e => {
              this.homeButton(e);
            }}>
            Home
          </Button>
        </Grid>
        <Grid item>
          <img src={MusicLogo} style={{ height: 70 }} />
        </Grid>
      </Grid>
    );
  }
}

export default NavBar;
