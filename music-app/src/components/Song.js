import React from 'react';
// import { connect } from 'react-redux';

class Song extends React.Component {
  render() {
    console.log('Song', this.props.song);
    return (
      <div>
        <p>{this.props.song && this.props.song.track.name}</p>
      </div>
    );
  }
}

export default Song;
