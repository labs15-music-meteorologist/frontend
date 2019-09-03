import React from 'react';
import { connect } from 'react-redux';

/* import { Mixpanel } from '../analytics/Mixpanel'; */
import { Grid, Typography } from '@material-ui/core';

import {
  getlikedSongs,
  getUsers,
  getSpotifyAccountDetails,
} from '../../actions';
import Song from './Song.js';

class LikedSongs extends React.Component {
  componentDidMount() {
    this.props.getlikedSongs();
    this.props.getUsers();
    // this.props.mixpanel.track('Spotify Login'); // Removed temp tracking

    // Example tracking once implemented
    this.props.getSpotifyAccountDetails();
    /*     Mixpanel.track('Spotify Login'); */

    // // Mixpanel Tracking
    // Mixpanel.identify(this.props.user.display_name);
    // Mixpanel.track('Successful login');
    // Mixpanel.people.set({
    //   $first_name: this.props.user.first_name,
    //   $last_name: this.props.user.last_name,
    // });
  }

  render() {
    if (this.props.fetchingLikedSongs) {
      return <h1>Loading...</h1>;
    }
    return (
      <Grid container>
        <Grid item>
          <Typography
            style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
            Liked Songs
          </Typography>
          {this.props.songs.map(song => (
            <Song song={song} id={song.track.id} key={song.track.id} />
          ))}
        </Grid>
        <Grid item>
          <Typography
            style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
            Users
          </Typography>
          {this.props.users.map(user => (
            <div>
              <p>{user.display_name}</p>
            </div>
          ))}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.likedSongsReducer.songs,
  users: state.getUsersReducer.users,
});

export default connect(
  mapStateToProps,
  { getlikedSongs, getUsers, getSpotifyAccountDetails },
)(LikedSongs);
