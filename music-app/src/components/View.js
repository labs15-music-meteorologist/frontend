import React from 'react';
import { Grid, Typography, AppBar } from '@material-ui/core';
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

class View extends React.Component {
  render() {
    return (
      <Grid
        container
        direction='row'
        justify='space-around'
        alignItems='center'>
        <Grid item>
          <Paper
            style={{
              maxHeight: 300,
              width: 250,
              overflow: 'auto',
              backgroundColor: 'black',
              color: 'white',
            }}>
            <List>
              <LikedSongs />
            </List>
          </Paper>
        </Grid>
        <Grid item>
          <MusicPlayer />
        </Grid>
      </Grid>
    );
  }
}

export default View;
