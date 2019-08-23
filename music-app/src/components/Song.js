import React from 'react';
import { getTrackInfo } from '../actions';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';

const token = localStorage.getItem('token');

class Song extends React.Component {
  componentDidMount() {
    getTrackInfo(token, this.props.id);
  }

  render() {
    console.log('ID', this.props.id); 
    console.log('Song', this.props.song);
    console.log('AF', this.props.audio_features[0])
    return (
      <div>
        <li
          style={{
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'flex-start',
            lineHeight: 4,
          }}>
          <img
            src={this.props.song.track.album.images[2].url}
            alt='album art'
            width='64px'
          />
          Song: {this.props.song.track.name} / Artist:
          {this.props.song.track.artists[0].name}
          
          Audio Features: {this.props.audio_features}
        </li>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  audio_features: state.trackInfoReducer.audio_features
});

export default connect(
  mapStateToProps,
  { getTrackInfo },
)(Song);
