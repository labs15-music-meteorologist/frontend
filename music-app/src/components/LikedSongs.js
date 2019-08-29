import React from 'react';
import { connect } from 'react-redux';
import Song from './Song.js';
import { getlikedSongs, getUsers, getSpotifyAccountDetails } from '../actions';
import { Mixpanel } from '../analytics/Mixpanel';
import Footer from './Footer.js';

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

  logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.props.history.push('/helloworld');
  };

  render() {
    if (this.props.fetchingLikedSongs) {
      return <h1>Loading...</h1>;
    // } else if(this.props.spotifyUser.product && this.props.fetchingSpotifyUser === false && this.props.spotifyUser.product !== 'premium') {
    //   this.props.history.push('/info')
    }
    return (
      <div >
        <button onClick={e => this.logout(e)}>Logout</button>
        <div>
          <h1>Liked Songs Dashboard</h1>
          {this.props.songs.map(song => (
            <Song song={song} id={song.track.id} key={song.track.id}/>
          ))}
        </div>
        <div>
          <h1>Users</h1>
          {this.props.users.map(user => (
            <div>
            <p>{user.display_name}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  songs: state.likedSongsReducer.songs,
  users: state.getUsersReducer.users,
  spotifyUser: state.getUsersReducer.spotifyUser,
  fetchingSpotifyUser: state.getUsersReducer.fetchingSpotifyUser
});

export default connect(
  mapStateToProps,
  { getlikedSongs, getUsers, getSpotifyAccountDetails },
)(LikedSongs);
