import React from 'react';
import { getLikedSongsAndFeatures } from '../actions';
import { connect } from 'react-redux';

class AudioFeatures extends React.Component {
  componentDidMount() {
    this.props.getLikedSongsAndFeatures();
  }

  render() {
    if (this.props.id === this.props.audio_features.id) {
      return <p>Audio Features: {this.props.audio_features.tempo}</p>;
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  audio_features: state.getTrackInfoReducer.audio_features,
});

export default connect(
  mapStateToProps,
  { getLikedSongsAndFeatures },
)(AudioFeatures);
