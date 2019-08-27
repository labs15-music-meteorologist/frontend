import React from 'react';
import { getTrackInfo } from '../actions';
import { connect } from 'react-redux';

class Song extends React.Component {
  componentDidMount() {
    if (!this.props.tracksInfo[this.props.id]) {
      this.props.getTrackInfo(this.props.id);
    }
  }

  render() {
    const tf = this.props.tracksInfo[this.props.id];
    const loadingTf = !tf || tf.fetching;
    // let af = 'Loading...';
    // if (tfErr) {
    //   af = 'Error Occurred';
    // }
    // if (tf && tf.data && tf.data.tempo) {
    //   af = tf.data.tempo;
    // }
    console.log('tf', tf);
    return (
      <div>
        <li
          style={{
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'flex-start',
            lineHeight: 1.5,
          }}>
          <img
            src={this.props.song.track.album.images[2].url}
            alt='album art'
            width='64px'
          />
          <p>Song: {this.props.song.track.name}</p>
          <p>Artist: {this.props.song.track.artists[0].name}</p>
          <p>
            Audio Features:{' '}
            {loadingTf ? 'loading....' : tf.data.tempo}
          </p>
        </li>
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
