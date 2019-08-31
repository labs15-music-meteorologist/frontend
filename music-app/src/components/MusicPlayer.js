import React, { Component } from 'react';
import axios from 'axios';

import { Grid } from '@material-ui/core';

import SkipLeft from '../assets/skip-left.png';
import SkipRight from '../assets/skip-right.png';
import Pause from '../assets/player-stop.png';
import Play from '../assets/player-start.png';
import loadingSpinner from '../assets/lava-lamp-preloader.svg';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem('token'),
      deviceId: '',
      loggedIn: false,
      error: '',
      trackName: 'Track Name',
      artistName: 'Artist Name',
      albumName: 'Album Name',
      imageUrl: '',
      playing: false,
      position: 0,
      duration: 1,
    };
    // this will later be set by setInterval
    this.playerCheckInterval = null;
  }

  componentDidMount() {
    this.handleLogin();
  }

  handleLogin() {
    if (this.state.token !== '') {
      this.setState({ loggedIn: true });
      this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
    }
  }

  // when we receive a new update from the player
  onStateChanged(state) {
    // only update if we got a real state
    if (state !== null) {
      const {
        current_track: currentTrack,
        position,
        duration,
      } = state.track_window;
      const trackName = currentTrack.name;
      const albumName = currentTrack.album.name;
      const artistName = currentTrack.artists
        .map(artist => artist.name)
        .join(', ');
      const playing = !state.paused;
      this.setState({
        position,
        duration,
        trackName,
        albumName,
        artistName,
        playing,
      });
    } else {
      // state was null, user might have swapped to another device
      this.setState({
        error: 'Looks like you might have swapped to another device?',
      });
    }
  }

  createEventHandlers() {
    this.player.on('initialization_error', e => {
      console.error(e);
    });

    this.player.on('authentication_error', e => {
      console.error(e);
      this.setState({ loggedIn: false });
    });

    this.player.on('account_error', e => {
      console.error(e);
    });

    this.player.on('playback_error', e => {
      console.error(e);
    });

    this.player.on('player_state_changed', state => {
      this.onStateChanged(state);
      this.getCurrentSong();
    });

    this.player.on('ready', async data => {
      let { device_id } = data;

      await this.setState({ deviceId: device_id, loggedIn: true });
      this.transferPlaybackHere();
    });
  }

  checkForPlayer() {
    const { token } = this.state;

    if (window.Spotify !== undefined) {
      clearInterval(this.playerCheckInterval);

      this.player = new window.Spotify.Player({
        name: 'Music Meteorologist Spotify Player',
        getOAuthToken: cb => {
          cb(token);
        },
      });

      this.createEventHandlers();

      this.player.connect();
    }
  }

  getCurrentSong() {
    const config = {
      headers: { Authorization: 'Bearer ' + this.state.token },
    };
    axios
      .get('https://api.spotify.com/v1/me/player/currently-playing', config)
      .then(res => {
        console.log(res.data);
        this.setState({
          imageUrl: res.data.item.album.images[1].url,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // SDK Player Song playback controls
  onPrevClick() {
    this.player.previousTrack();
  }

  onPlayClick() {
    this.player.togglePlay();
  }

  onNextClick() {
    this.player.nextTrack();
  }

  transferPlaybackHere() {
    const { token } = this.state;
    fetch(
      `https://api.spotify.com/v1/me/player/play?device_id=${this.state.deviceId}`,
      {
        method: 'PUT',
        headers: {
          authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // This is where we will control what music is fed to the user
          // If we want to direct them to a specific playlist,artist or album we will pass in "context_uri" with its respective uri
          context_uri:
            'spotify:user:spotifycharts:playlist:37i9dQZEVXbMDoHDwVN2tF', //Directs User to Global Top 50 playlist curated by spotify

          // In order manipulate the user's queue and feed them a more fluid and unique array of songs we would instead
          // pass an array of song uris through the "uris" key
          // The example below if uncommented will direct the user to 3 songs (make sure to comment out the context_uri)
          // uris:["spotify:track:0aULRU35N9kTj6O1xMULRR","spotify:track:0VgkVdmE4gld66l8iyGjgx","spotify:track:5ry2OE6R2zPQFDO85XkgRb"]
        }),
      },
    );
  }

  render() {
    const { trackName, artistName, albumName, error, playing } = this.state;

    return (
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item>
          {window.Spotify === undefined && (
            <div className='spinning-loader-burning'>
              <img src={loadingSpinner} alt='Moving animation of a flame.' />
            </div>
          )}
          {window.Spotify !== undefined && this.state.imageUrl !== '' && (
            <div className='album-art'>
              <h4 style={{ textAlign: 'center' }}>Now Playing</h4>
              <img src={this.state.imageUrl} alt='album-art' />
            </div>
          )}
        </Grid>

        {error && <p>Error: {error}</p>}

        <Grid item>
          <div>Artist: {artistName}</div>
          <p>Track: {trackName}</p>
          <p>Album: {albumName}</p>
        </Grid>

        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          style={{ width: 300 }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
            }}
            onClick={() => this.onPrevClick()}>
            <img src={SkipLeft} alt="White icon to skip to the previous song." style={{ maxHeight: 22 }} />
          </button>

          <button
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
            }}
            onClick={() => this.onPlayClick()}>
            {playing ? (
              <img src={Pause} alt="White icon to pause a song." style={{ maxHeight: 35 }} />
            ) : (
              <img src={Play} alt="White icon to start a pause song." style={{ maxHeight: 35 }} />
            )}
          </button>

          <button
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
            }}
            onClick={() => this.onNextClick()}>
            <img src={SkipRight} alt="White icon to skip to the next song." style={{ maxHeight: 22 }} />
          </button>
        </Grid>
      </Grid>
    );
  }
}

export default MusicPlayer;
