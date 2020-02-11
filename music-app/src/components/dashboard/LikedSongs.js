import React from 'react';
import { connect } from 'react-redux';

import { Grid, Typography } from '@material-ui/core';

import { getlikedSongs, getUsers, getPlaylist } from '../../Redux/Spotify/spotify.actions';
import Song from './Song.js';

class LikedSongs extends React.Component {
  state = {
    getList: false,
  };
  componentDidMount() {
    // this.props.getlikedSongs();
    this.props.getUsers();
  }

  componentDidUpdate() {
    if (this.props.addedTo && this.state.getList && this.props.playlistId) {
      this.props.getPlaylist(this.props.playlistId);

      if (this.props.playlistId) {
        this.setState({
          getList: true,
        });
      }
    }
  }

  render() {
    if (this.props.fetchingLikedSongs) {
      return <h1>Loading...</h1>;
    }
    return (
      <Grid container>
        <Grid item>
          {this.props.several_tracks.tracks &&
            this.props.several_tracks.tracks.map(song => (
              <Song song={song} id={song.id} key={song.id} />
            ))}
          {/* {this.props.playlistTracks &&
            this.props.playlistTracks.map(song => (
              <Song song={song.track} id={song.track.id} key={song.track.id} />
            ))} */}
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
  spotifyUser: state.getUsersReducer.spotifyUser,
  several_tracks: state.queueReducer.several_tracks,
  playlistTracks: state.getPlaylistReducer.playlistTracks.items,
  playlistId: state.createPlaylistReducer.playlistId,
  playlistCreated: state.createPlaylistReducer.playlistCreated,
  addedTo: state.addToPlaylistReducer.addedTo,
});

export default connect(
  mapStateToProps,
  { getlikedSongs, getUsers, getPlaylist },
)(LikedSongs);
