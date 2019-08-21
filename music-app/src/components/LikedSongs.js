import React from 'react';
import { connect } from 'react-redux';
import Song from './Song.js';
import { getlikedSongs } from '../actions';

const token = localStorage.getItem('token');

class LikedSongs extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    this.props.getlikedSongs(token);
  }

  render() {
    this.props.songs && console.table(this.props.songs.songs[1]);
    return (
      <div>
        <h1>Liked Songs Dashboard</h1>
        {this.props.songs.songs.map(song => (
          <Song song={song} />
        ))}
        {/* // {this.props.songs.songs[1] && this.props.songs.songs[1].track.name} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.likedSongsReducer,
});

export default connect(
  mapStateToProps,
  { getlikedSongs },
)(LikedSongs);
