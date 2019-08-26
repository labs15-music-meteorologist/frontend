import React from 'react';
import { getLikedSongsAndFeatures } from '../actions';
import { connect } from 'react-redux';

class Song extends React.Component {
  render() {
    console.log('Audio_Features', this.props.audio_features);
    console.log('Track Name', this.props.song.track.name);
    // console.log('Song', this.props.song);
    // console.log('AF', this.props.audio_features);
    // if (this.props.song.track.id === this.props.audio_features.id) {
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

          {/* <p>Audio Features: {this.props.audio_features.tempo}</p> */}
        </li>
      </div>
    );
    // } else {
    //   return null;
    // }
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { getLikedSongsAndFeatures },
)(Song);

// export default Song;
