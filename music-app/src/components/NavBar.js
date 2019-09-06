import React from 'react';

import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import '../views/styles/navbar.css';

import MusicLogo from '../assets/logo-music-new.png';

class NavBar extends React.Component {
  homeButton = e => {
    e.preventDefault();
    window.location.href = '/';
  };

  render() {
    return (
      <div class='navwrapper'>
        {/* <div class='home-button-wrapper'>
          <button
            to='/'
            class='home-button'
            onClick={e => {
              this.homeButton(e);
            }}>
            Home
          </button>
        </div> */}
        <div class='navcontainer'>
          <img
            class='navlogo'
            src={MusicLogo}
            alt={'Music Meteorologist logo with Meteor on last "o"'}
            style={{ height: 70 }}
            onClick={e => {
              this.homeButton(e);
            }}></img>
        </div>
      </div>
    );
  }
}

export default NavBar;
