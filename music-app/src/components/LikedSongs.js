import React from 'react';
import { connect } from 'react-redux';
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
    console.log('SONGS', this.props.songs);
    return (
      <div>
        {/* {this.props.songs.map(song => {
          <div className='likedSongs'>
            <p>{song.track.name}</p>
          </div>;
        })} */}
        <h1>Liked Songs Dashboard</h1>
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
