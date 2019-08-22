import React from 'react';
import { connect } from 'react-redux';
import Song from './Song.js';
import { getlikedSongs } from '../actions';

const token = localStorage.getItem('token');

class LikedSongs extends React.Component {
  componentDidMount() {
    this.props.getlikedSongs(token);
  }

  render() {
    console.log(this.props.songs);
    return (
      <div>
        <h1>Liked Songs Dashboard</h1>
        {this.props.songs.map(song => (
          <Song song={song} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.likedSongsReducer.songs,
});

export default connect(
  mapStateToProps,
  { getlikedSongs },
)(LikedSongs);
