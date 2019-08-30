import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core';
import SkipLeft from '../images/skip-left.png';
import SkipRight from '../images/skip-right.png';
import Pause from '../images/player-stop.png';
import Play from '../images/player-start.png';

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    // set the initial state
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
  // when we click the "go" button
  handleLogin() {
    if (this.state.token !== '') {
      // change the loggedIn variable, then start checking for the window.Spotify variable
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
    // problem setting up the player
    this.player.on('initialization_error', e => {
      console.error(e);
    });
    // problem authenticating the user.
    // either the token was invalid in the first place,
    // or it expired (it lasts one hour)
    this.player.on('authentication_error', e => {
      console.error(e);
      this.setState({ loggedIn: false });
    });
    // currently only premium accounts can use the API
    this.player.on('account_error', e => {
      console.error(e);
    });
    // loading/playing the track failed for some reason
    this.player.on('playback_error', e => {
      console.error(e);
    });

    // Playback status updates
    this.player.on('player_state_changed', state => {
      this.onStateChanged(state);
      this.getCurrentSong();
    });

    // Ready
    this.player.on('ready', async data => {
      let { device_id } = data;
      console.log('Let the music play on!');
      // set the deviceId variable, then let's try
      // to swap music playback to *our* player!
      await this.setState({ deviceId: device_id, loggedIn: true });
      this.transferPlaybackHere();
    });
  }

  checkForPlayer() {
    const { token } = this.state;

    // if the Spotify SDK has loaded
    if (window.Spotify !== undefined) {
      // cancel the interval
      clearInterval(this.playerCheckInterval);
      // create a new player
      this.player = new window.Spotify.Player({
        name: 'Music Meteorologist Spotify Player',
        getOAuthToken: cb => {
          cb(token);
        },
      });
      // set up the player's event handlers
      this.createEventHandlers();

      // finally, connect!
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
    const { deviceId, token } = this.state;
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
    const {
      token,
      loggedIn,
      trackName,
      artistName,
      albumName,
      error,
      playing,
    } = this.state;

    return (
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item>
          <h4>Now Playing</h4>
          <img src={this.state.imageUrl} alt='album-art' />
        </Grid>

        {error && <p>Error: {error}</p>}

        <Grid item>
          <p>Artist: {artistName}</p>
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
            <img src={SkipLeft} style={{ maxHeight: 22 }} />
          </button>

          <button
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
            }}
            onClick={() => this.onPlayClick()}>
            {playing ? (
              <img src={Pause} style={{ maxHeight: 35 }} />
            ) : (
              <img src={Play} style={{ maxHeight: 35 }} />
            )}
          </button>

          <button
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
            }}
            onClick={() => this.onNextClick()}>
            <img src={SkipRight} style={{ maxHeight: 22 }} />
          </button>
        </Grid>
      </Grid>
    );
  }
}

export default MusicPlayer;
