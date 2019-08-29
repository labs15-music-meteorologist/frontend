import React from 'react';
import { Grid } from '@material-ui/core';
import LikedSongs from './LikedSongs.js';
import MusicPlayer from './Player.js';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
// import Fab from '@material-ui/core/Fab';
// import MenuIcon from '@material-ui/icons/Menu';
// import AddIcon from '@material-ui/icons/Add';
// import SearchIcon from '@material-ui/icons/Search';
// import MoreIcon from '@material-ui/icons/MoreVert';

class Dashboard extends React.Component {
  logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.props.history.push('/logout');
  };
  render() {
    return (
      <>
        <button onClick={e => this.logout(e)}>Logout</button>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'>
          <Grid item>
            <Paper
              style={{
                maxHeight: 450,
                width: 400,
                overflow: 'auto',
                // backgroundColor: 'black',
                backgroundColor: `rgba(${0}, ${0}, ${17}, ${0.6})`,
                color: 'white',
              }}>
              <List>
                <LikedSongs props={this.props} />
              </List>
            </Paper>
          </Grid>
          <Grid item>
            <MusicPlayer />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Dashboard;
