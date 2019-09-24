import React from 'react';

import '../views/styles/navbar.css';

import MusicLogo from '../assets/logo-music-new.png';

class NavBar extends React.Component {
  homeButton = e => {
    e.preventDefault();
    window.location.href = '/';
  };

  render() {
    return (
      <div className='navwrapper joyride-logo-1'>
        <div className='navcontainer '>
          <img
            className='navlogo'
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
