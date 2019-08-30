import React from 'react';
import { Grid } from '@material-ui/core';
import LikedSongs from './LikedSongs.js';
import MusicPlayer from './Player.js';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
// import Fab from '@material-ui/core/Fab';
// import MenuIcon from '@material-ui/icons/Menu';
// import AddIcon from '@material-ui/icons/Add';
// import SearchIcon from '@material-ui/icons/Search';
// import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  button: {
    padding: theme.spacing(1),
  },
  // input: {
  //   display: 'none',
  // },
  // root: {
  //   flexGrow: 1,
  // },
  // paper: {
  //   padding: 0,
  //   margin: 'auto',
  //   maxWidth: 500,
  // },
}));

class Dashboard extends React.Component {
  logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.props.history.push('/logout');
  };
  render() {
    return (
      <>
        <Button
          variant='contained'
          className={useStyles.button}
          onClick={e => this.logout(e)}>
          Logout
        </Button>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'>
          <Grid item>
            <Paper
              style={{
                maxHeight: 450,
                width: 380,
                overflow: 'auto',
                // backgroundColor: 'black',
                backgroundColor: `rgba(${20}, ${20}, ${20}, ${0.85})`,
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
