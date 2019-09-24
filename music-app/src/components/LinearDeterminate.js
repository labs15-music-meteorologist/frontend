import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCurrentSong } from '../actions';

import LinearProgress from '@material-ui/core/LinearProgress';

class LinearDeterminate extends Component {
  state = {
    position: 0,
    duration: 1,
  };
  checkPlayer = (player, song) => {
    if (player !== undefined && song.length !== 0) {
      player.getCurrentState().then(state => {
        if (!state) {
          console.error(
            'User is not playing music through the Web Playback SDK',
          );
          return;
        }

        let { position, duration } = state;
        this.checkPosistion(position, duration);
      });
    }
  };

  checkPosistion = (song_posistion, song_length) => {
    for (; song_posistion < song_length; ) {
      this.setState({
        duration: song_length,
        position: song_posistion,
      });
      let progress = (song_posistion / song_length) * 100;
      return progress;
    }
  };

  render() {
    const player = this.props.player;
    const song = this.props.song;
    this.props.song && this.checkPlayer(player, song);
    const tvalue = Math.floor(
      (this.state.position / this.state.duration) * 100,
    );
    const minutesPosition = Math.floor(this.state.position / 60000);
    const remainingSecondsPosition = Math.floor(
      this.state.position / 1000 - minutesPosition * 60,
    );
    const minutesDuration = Math.floor(this.state.duration / 60000);
    const remainingSecondsDuration = Math.floor(
      this.state.duration / 1000 - minutesDuration * 60,
    );
    return (
      <div style={{ width: '10rem' }}>
        <LinearProgress variant='determinate' value={tvalue} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>
            {minutesPosition === 0 ? '00' : minutesPosition}:
            {remainingSecondsPosition < 10
              ? '0' + remainingSecondsPosition.toString()
              : remainingSecondsPosition}
          </span>
          <span>
            {minutesDuration === 0 ? '00' : minutesDuration}:
            {remainingSecondsDuration < 10
              ? '0' + remainingSecondsDuration.toString()
              : remainingSecondsDuration}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  song: state.currentSongReducer.item,
});

export default connect(
  mapStateToProps,
  { getCurrentSong },
)(LinearDeterminate);
