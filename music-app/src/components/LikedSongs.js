import React from 'react';
import { connect } from 'react-redux';
import Song from './Song.js';
import AudioFeatures from './AudioFeatures.js';
import { getLikedSongsAndFeatures, getUsers } from '../actions';

class LikedSongs extends React.Component {
  state = {};
  componentDidMount() {
    this.props.getLikedSongsAndFeatures();
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
              <Song
                song={song}
                id={song.track.id}
                audio_features={this.props.audio_features}
              />
            </>
          ))}
        </div>

        {/* <div>
          <h1>Users</h1>
          {this.props.users.map(user => (
            <p>{user.display_name}</p>
          ))}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.likedSongsReducer.songs,
  users: state.getUsersReducer.users,
  ids: state.likedSongsReducer.ids,
  audio_features: state.getTrackInfoReducer.audio_features,
});

export default connect(
  mapStateToProps,
  { getLikedSongsAndFeatures, getUsers },
)(LikedSongs);
