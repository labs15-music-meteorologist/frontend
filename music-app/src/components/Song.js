import React from 'react';
import { getTrackInfo } from '../actions';
import { connect } from 'react-redux';

class Song extends React.Component {
  componentDidMount() {
    this.props.getTrackInfo(this.props.id);
    console.log('CDM');
  }

  render() {
    console.log('Audio_Features', this.props.audio_features);
    // console.log('ID', this.props.id);
    // console.log('Song', this.props.song);
    // console.log('AF', this.props.audio_features);
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
          <p>Audio Features: {this.props.audio_features.tempo}</p>
        </li>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  audio_features: state.getTrackInfoReducer.audio_features,
});

export default connect(
  mapStateToProps,
  { getTrackInfo },
)(Song);

// export default Song;
