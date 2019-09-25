import React from 'react';
import { connect } from 'react-redux';

import { Grid, Typography } from '@material-ui/core';

import { getTrackInfo } from '../../actions';
import '../../App.css';

class Song extends React.Component {
  render() {
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
              src={this.props.song.album.images[2].url}
              alt='album art'
              width='64px'
            />
          </Grid>
          <Grid item xs style={{ padding: 5 }}>
            <Typography
              style={{ fontSize: 13, fontWeight: 'bold' }}
              direction='row'>
              {this.props.song.name}
            </Typography>
            <Typography style={{ fontSize: 13 }}>
              {this.props.song.artists[0].name}
            </Typography>
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
