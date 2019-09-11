import React from 'react';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Joyride from 'react-joyride';

import {
  getlikedSongs,
  getUsers,
  getSpotifyAccountDetails,
  persistUser,
} from '../actions';

import LikedSongs from '../components/dashboard/LikedSongs';
import MusicPlayer from '../components/dashboard/MusicPlayer';

import '../App.css';

class Dashboard extends React.Component {
  state = {
    collapse: false,
    steps: [
      {
        target: '.joyride-logo-1',
        content:
          'Welcome to Music Meteorologist! Here you will be able to rate songs based on characteristics and recieve song recommendations',
      },
      {
        target: '.joyride-player-2',
        content:
          'Here you can view what song you will be rating and the characteristics for that song',
      },
      {
        target: '.joyride-3',
        content: 'Tap here to view more details on each of the characteristics',
        placement: 'right',
      },
      // {
      //   target: '.joyride-prediction-5',
      //   content:
      //     'Review the characteristics and let us know if you think you would like this song, when you decide the music will start playing',
      // },
      {
        target: '.joyride-dislike-4',
        content:
          'Click this button, and we will take this song out of your queue, and go to the next song',
        placement: 'right',
      },
      {
        target: '.joyride-prediction-5',
        content:
          'This our level of confidence that you will like this song based on your rating',
      },
      {
        target: '.joyride-like-6',
        content: 'Click to add to your liked songs on Spotify, and move you to the next song',
      },
    ],
  };

  componentDidMount() {
    this.props.getSpotifyAccountDetails();
  }

  componentDidUpdate() {
    this.props.spotifyUser.id && this.props.persistUser(this.props.spotifyUser);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.props.history.push('/logout');
  };

  checkPremiumUser = () => {
    return this.props.spotifyUser.product &&
      this.props.fetchingSpotifyUser === false &&
      this.props.spotifyUser.product !== 'premium'
      ? true
      : false;
  };

  checkNoIOS = () => {
    return window.navigator.platform === 'iPhone' ||
      window.navigator.platform === 'iPad' ||
      window.navigator.platform === 'iPod'
      ? true
      : false;
  };
  render() {
    if (this.checkPremiumUser() || this.checkNoIOS()) {
      this.props.history.push('/info');
    }

    return (
      <div className='dashboard'>
        <Joyride
          steps={this.state.steps}
          continuous={true}
          scrollToFirstStep={true}
          styles={{
            beaconInner: {
              backgroundColor: '#5ce1e6',
            },
            beaconOuter: {
              border: '2px solid #5ce1e6',
            },
            options: {
              primaryColor: '#5ce1e6',
            },
          }}
        />
        <div>
          <Button
            className='burger'
            style={{ color: 'white' }}
            onClick={() => this.onClick()}>
            <Grid container direction='column'>
              <div
                className={
                  this.state.collapse
                    ? 'line-one mobile-only toggle-line-one'
                    : 'line-one mobile-only'
                }
              />
              <div
                className={
                  this.state.collapse
                    ? 'line-two mobile-only toggle-line-two'
                    : 'line-two mobile-only'
                }
              />
              <div
                className={
                  this.state.collapse
                    ? 'line-three mobile-only toggle-line-three'
                    : 'line-three mobile-only'
                }
              />
            </Grid>
            Playlist
          </Button>
          <Button
            variant='contained'
            onClick={e => this.logout(e)}
            style={{
              color: 'white',
              backgroundColor: `rgba(${56}, ${182}, ${255}, ${0.6})`,
              fontWeight: '600',
              letterSpacing: '1.5px',
              position: 'absolute',
              right: '0px',
              marginRight: '5%',
              marginTop: '0.8%',
            }}>
            Logout
          </Button>
          <List>
            <Paper
              className={
                this.state.collapse ? 'side-menu-open' : 'side-menu-closed'
              }
              style={{
                maxHeight: 450,
                width: 280,
                overflow: 'auto',
                backgroundColor: `rgba(${20}, ${20}, ${20}, ${0.9})`,
                color: 'white',
              }}>
              <LikedSongs props={this.props} />
            </Paper>
          </List>
        </div>

        <Grid item>
          <MusicPlayer />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spotifyUser: state.getUsersReducer.spotifyUser,
  fetchingSpotifyUser: state.getUsersReducer.fetchingSpotifyUser,
});

export default connect(
  mapStateToProps,
  { getlikedSongs, getUsers, getSpotifyAccountDetails, persistUser },
)(Dashboard);
