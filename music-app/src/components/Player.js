import React, { Component } from 'react';
import axios from 'axios';

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


  componentDidMount(){
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
      await this.setState({ deviceId: device_id,
      loggedIn:true });
      this.transferPlaybackHere();
    });
  }

  checkForPlayer() {
    const { token } = this.state;

    // if the Spotify SDK has loaded
    if (window.Spotify !== null) {
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
          imageUrl: res.data.item.album.images[0].url,
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
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${this.state.deviceId}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // This is where we will control what music is fed to the user
        // If we want to direct them to a specific playlist,artist or album we will pass in "context_uri" with its respective uri
        context_uri: "spotify:user:spotifycharts:playlist:37i9dQZEVXbMDoHDwVN2tF" //Directs User to Global Top 50 playlist curated by spotify

        // In order manipulate the user's queue and feed them a more fluid and unique array of songs we would instead
        // pass an array of song uris through the "uris" key
        // The example below if uncommented will direct the user to 3 songs (make sure to comment out the context_uri)
        // uris:["spotify:track:0aULRU35N9kTj6O1xMULRR","spotify:track:0VgkVdmE4gld66l8iyGjgx","spotify:track:5ry2OE6R2zPQFDO85XkgRb"]
      })

    });
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
      <div className='App'>
        <div className='App-header'>
          <h2>Now Playing</h2>
          <img src={this.state.imageUrl} alt='album-art' />
        </div>

        {error && <p>Error: {error}</p>}

        <div>
          <p>Artist: {artistName}</p>
          <p>Track: {trackName}</p>
          <p>Album: {albumName}</p>
          <p>
            <button onClick={() => this.onPrevClick()}>Previous</button>
            <button onClick={() => this.onPlayClick()}>
              {playing ? 'Pause' : 'Play'}
            </button>
            <button onClick={() => this.onNextClick()}>Next</button>
          </p>
        </div>
      </div>
    );
  }
}

export default MusicPlayer;
