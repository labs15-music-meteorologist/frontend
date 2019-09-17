import React from 'react';
import { connect } from 'react-redux';

/* import { Mixpanel } from '../analytics/Mixpanel'; */
import { Grid, Typography } from '@material-ui/core';

import { getlikedSongs, getUsers, getPlaylist } from '../../actions';
import Song from './Song.js';

class LikedSongs extends React.Component {
  state = {
    getList: false,
  };
  componentDidMount() {
    // this.props.getlikedSongs();
    this.props.getUsers();
    // this.props.mixpanel.track('Spotify Login'); // Removed temp tracking

    // Example tracking once implemented
    /* this.props.getSpotifyAccountDetails(); */
    /*     Mixpanel.track('Spotify Login'); */

    // // Mixpanel Tracking
    // Mixpanel.identify(this.props.user.display_name);
    // Mixpanel.track('Successful login');
    // Mixpanel.people.set({
    //   $first_name: this.props.user.first_name,
    //   $last_name: this.props.user.last_name,
    // });
  }

  componentDidUpdate(prevProps) {
    if (this.props.playlistCreated === true && this.state.getList === false) {
      this.props.getPlaylist(this.props.playlistId);
      this.setState({
        getList: true,
      });
    }
  }

  render() {
    console.log('PLAYLIST ID PROPS', this.props.playlistId);
    if (this.props.fetchingLikedSongs) {
      return <h1>Loading...</h1>;
    }
    return (
      <Grid container>
        <Grid item>
          <Typography
            style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
            Queue
          </Typography>

          {/* {this.props.several_tracks.tracks &&
            this.props.several_tracks.tracks.map(song => (
              <Song song={song} id={song.id} key={song.id} />
            ))} */}
          {this.props.playlistTracks &&
            this.props.playlistTracks.map(song => (
              <Song song={song.track} id={song.track.id} key={song.track.id} />
            ))}
        </Grid>
        {/* <Grid item>
          <Typography
            style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
            Users
          </Typography>
          {this.props.users.map(user => (
            <div>
              <p>{user.display_name}</p>
            </div>
          ))}
        </Grid> */}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.likedSongsReducer.songs,
  users: state.getUsersReducer.users,
  several_tracks: state.queueReducer.several_tracks,
  playlistTracks: state.getPlaylistReducer.playlistTracks.items,
  playlistId: state.createPlaylistReducer.playlistId,
  playlistCreated: state.createPlaylistReducer.playlistCreated,
});

export default connect(
  mapStateToProps,
  { getlikedSongs, getUsers, getPlaylist },
)(LikedSongs);
