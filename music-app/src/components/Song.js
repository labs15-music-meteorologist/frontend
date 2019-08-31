import React from 'react';
import { connect } from 'react-redux';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { getTrackInfo } from '../actions';
import '../App.css';

class Song extends React.Component {
  componentDidMount() {
    if (!this.props.tracksInfo[this.props.id]) {
      this.props.getTrackInfo(this.props.id);
    }
  }

  render() {
    const tf = this.props.tracksInfo[this.props.id];
    /*    const loadingTf = !tf || tf.fetching; */
    return (
      <div>
        <Grid
          container
          direction='row'
          alignItems='center'
          wrap='wrap'
          className='song'>
          <Grid item style={{ padding: 5 }}>
            <img
              src={this.props.song.track.album.images[2].url}
              alt='album art'
              width='64px'
            />
          </Grid>
          <Grid item xs style={{ padding: 5 }}>
            <Typography
              style={{ fontSize: 13, fontWeight: 'bold' }}
              direction='row'>
              {this.props.song.track.name}
            </Typography>
            <Typography style={{ fontSize: 13 }}>
              {this.props.song.track.artists[0].name}
            </Typography>
            {/* <p>Audio Features: {loadingTf ? 'loading....' : tf.data.tempo}</p> */}
          </Grid>
        </Grid>
      </div>
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
