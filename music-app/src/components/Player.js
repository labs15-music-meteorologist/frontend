import React from 'react';
import { connect } from 'react-redux';
import { getCurrentSong } from '../actions';
import SpotifyPlayer from 'react-spotify-player';

const token = localStorage.getItem('token');

const view = 'list';
const size = {
  width: '100%',
  height: 300
};
const theme = 'black';

class MusicPlayer extends React.Component {
  componentDidMount() {
    console.log('inside Player CDM');
    this.props.getCurrentSong(token);
  }

  render() {
    console.log('Now Playing:', this.props.item.name);
    return (
      <>
        <h1>Hello from player</h1>
        <div className='player-wrapper'>
          <SpotifyPlayer
            uri={this.props.item.uri}
            size={size}
            view={view}
            theme={theme}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  item: state.playerReducer.item,
  is_playing: state.playerReducer.is_playing,
  progress_ms: state.playerReducer.progress_ms
});

export default connect(
  mapStateToProps,
  { getCurrentSong }
)(MusicPlayer);
