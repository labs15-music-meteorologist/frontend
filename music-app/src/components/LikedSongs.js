import React from 'react';
import { connect } from 'react-redux';
import Song from './Song.js';
import AudioFeatures from './AudioFeatures.js';
import { getLikedSongs, getUsers } from '../actions';

class LikedSongs extends React.Component {
  state = {};
  componentDidMount() {
    this.props.getLikedSongs();
    this.props.getUsers();
  }

  logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.props.history.push('/logout');
  };

  render() {
    if (this.props.fetchingLikedSongs) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <button onClick={e => this.logout(e)}>Logout</button>
        <div>
          <h1>Liked Songs Dashboard</h1>
          {this.props.songs.map(song => (
            <>
              <Song song={song} id={song.track.id} />
              {/* <AudioFeatures id={song.track.id} /> */}
            </>
          ))}
        </div>
        <div>
          <h1>Users</h1>
          {this.props.users.map(user => (
            <p>{user.display_name}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.likedSongsReducer.songs,
  users: state.getUsersReducer.users,
});

export default connect(
  mapStateToProps,
  { getLikedSongs, getUsers },
)(LikedSongs);
