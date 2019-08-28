import React from 'react';
import Button from '@material-ui/core/Button';
import Auth from './Auth';
// import { flexbox } from '@material-ui/system';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Button to='/'> Home </Button>
        <Auth />
      </div>
    );
  }
}

export default NavBar;
