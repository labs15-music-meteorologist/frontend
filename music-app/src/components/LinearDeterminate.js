import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentSong } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

class LinearDeterminate extends Component {
  state = {
    position: 0,
    duration: 1
  };
  checkPlayer = (player, song) => {
    if (player !== undefined && song.length !== 0) {
      //   console.log('PLAYER:', player);

      //   let song = this.props.song;
      //   console.log('SONG CAPTURE', song);
      //   return song;
      player.getCurrentState().then(state => {
        if (!state) {
          console.error(
            'User is not playing music through the Web Playback SDK'
          );
          return;
        }

        let { position, duration } = state;
        this.checkPosistion(position, duration);
        // console.log('Current State:', state);
        // console.log('Currently Playing', current_track);
        // console.log('Playing Next', next_track);
      });
    }
  };

  checkPosistion = (song_posistion, song_length) => {
    for (; song_posistion < song_length; ) {
      this.setState({
        duration: song_length,
        position: song_posistion
      });
      let position = (song_posistion / song_length) * 100;
      return position;
    }
  };

  render() {
    const player = this.props.player;
    const song = this.props.song;
    this.checkPlayer(player, song);
    const tvalue = (this.state.position / this.state.duration) * 100;
    return (
      <div>
        <LinearProgress variant='determinate' value={tvalue} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  song: state.currentSongReducer.item
});

export default connect(
  mapStateToProps,
  { getCurrentSong }
)(LinearDeterminate);
