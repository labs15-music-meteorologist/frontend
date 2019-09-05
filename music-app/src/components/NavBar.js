import React from 'react';

import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import MusicLogo from '../assets/logo-music-new.png';

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
          {(window.location = '/dashboard') ? (
            <img
              src={MusicLogo}
              alt={'Music Meteorologist logo with Meteor on last "o"'}
              style={{ height: 70 }}
            />
          ) : (
            <img
              src={MusicLogo}
              alt={'Music Meteorologist logo with Meteor on last "o"'}
              style={{ height: 70, display: 'none' }}
            />
          )}
        </Grid>
      </Grid>
    );
  }
}

export default NavBar;
