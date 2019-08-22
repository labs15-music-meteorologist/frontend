import React from 'react';
// import { connect } from 'react-redux';

class Song extends React.Component {
  render() {
    console.log('Song', this.props.song);
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
        </li>
      </div>
    );
  }
}

export default Song;
