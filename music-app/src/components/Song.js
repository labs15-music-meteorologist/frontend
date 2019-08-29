import React from 'react';
import { getTrackInfo } from '../actions';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';

class Song extends React.Component {
  componentDidMount() {
    if (!this.props.tracksInfo[this.props.id]) {
      this.props.getTrackInfo(this.props.id);
    }
  }

  render() {
    const tf = this.props.tracksInfo[this.props.id];
    const loadingTf = !tf || tf.fetching;
    return (
      <Grid container direction='row' alignItems='center'>
        <Grid item style={{ marginRight: 1 }}>
          <img
            src={this.props.song.track.album.images[2].url}
            alt='album art'
            width='64px'
          />
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: 14 }}>
            Song: {this.props.song.track.name}
          </Typography>
          <Typography style={{ fontSize: 12 }}>
            Artist: {this.props.song.track.artists[0].name}
          </Typography>
          {/* <p>Audio Features: {loadingTf ? 'loading....' : tf.data.tempo}</p> */}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  tracksInfo: state.getTrackInfoReducer,
});

export default connect(
  mapStateToProps,
  { getTrackInfo },
)(Song);
