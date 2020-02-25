import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import {
  getlikedSongs,
  getUsers,
  getPlaylist
} from "../../Redux/Spotify/spotify.actions";
import Song from "./Song.js";

class LikedSongs extends React.Component {
  state = {
    getList: false
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
          getList: true
        });
      }
    }
  }

  render() {
    console.log("liked songs props", this.props);
    console.log("liked songs state", this.state);

    console.log();
    if (this.props.fetchingLikedSongs) {
      return <h1>Loading...</h1>;
    }
    return (
      <Grid container>
        <Grid id="songLD" item>
          {this.props.several_tracks.tracks ? 
            this.props.several_tracks.tracks.map(song => (
              <Song
                song={song}
                id={song.id}
                key={song.id}
                deviceId={this.props.deviceId}
                tracks={this.props.several_tracks.tracks}
              />
            )) : <h1>Loading...</h1>}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.likedSongsReducer,
  spotifyUser: state.getUsersReducer.spotifyUser,
  several_tracks: state.queueReducer.several_tracks,
  playlistTracks: state.getPlaylistReducer,
  playlistId: state.createPlaylistReducer,
  playlistCreated: state.createPlaylistReducer.playlistCreated,
  addedTo: state.addToPlaylistReducer.addedTo
});

export default connect(mapStateToProps, {
  getlikedSongs,
  getUsers,
  getPlaylist
})(LikedSongs);
