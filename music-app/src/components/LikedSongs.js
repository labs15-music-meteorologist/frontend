import React from 'react';
import { connect } from 'react-redux';
import Song from './Song.js';
import { getlikedSongs, getUsers } from '../actions';

const token = localStorage.getItem('token');

class LikedSongs extends React.Component {
  componentDidMount() {
    this.props.getlikedSongs(token);
    this.props.getUsers();
  }

  render() {
    console.log(this.props.songs);
    console.log('USERS', this.props.users[0]);
    return (
      <div>
        <div>
          <h1>Liked Songs Dashboard</h1>
          {this.props.songs.map(song => (
            <Song song={song} />
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
  { getlikedSongs, getUsers },
)(LikedSongs);
