import React from 'react';
import LikedSongs from './LikedSongs.js';
import MusicPlayer from './Player.js';

class View extends React.Component {
  render() {
    return (
      <>
        <LikedSongs />
        <MusicPlayer />
      </>
    );
  }
}

export default View;
