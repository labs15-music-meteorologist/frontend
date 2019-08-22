import React from 'react';
import { connect } from 'react-redux';
import { getCurrentSong } from '../actions';

const token = localStorage.getItem('token');

class SpotifyPlayer extends React.Component {
  componentDidMount() {
    console.log('inside Player CDM');
    this.props.getCurrentSong(token);
  }

  render() {
    console.log('Now Playing', this.props.song);
    return (
      <>
        <h1>Hello from player</h1>
      </>
    );
  }
}

const mapStateToProps = state => ({
  song: state.playerReducer.song
});

export default connect(
  mapStateToProps,
  { getCurrentSong }
)(SpotifyPlayer);
