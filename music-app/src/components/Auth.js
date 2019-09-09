import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import '../App.css';
import '../views/styles/homepage.css';

import walking_city from '../assets/walking_city.svg';
import weather_sitting from '../assets/weather_sitting.svg';
import music_notes from '../assets/music_notes.svg';
import user_gif from '../assets/user_gif.gif';

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const clientId = '256aebf9b04a4f5480a757f770864028'; // testing ENV
const redirectUri = process.env.REACT_APP_REDIRECT_URL; // has to match exactly with spotify dashboard redirect uri
const scopes = [
  'streaming',
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-library-read',
  'user-modify-playback-state',
  'user-read-email',
  'user-read-private',
];

const hash = window.location.hash
  .substring(1)
  .split('&')
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

window.location.hash = '';

export class Auth extends Component {
  componentDidMount() {
    let token = hash.access_token;
    if (token) {
      localStorage.setItem('token', token);
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className='auth'>
        {/* <img src={HeaderImage} style={{ width: '63%', margin: 20 }} /> */}
        <div class='main-wrapper'>
          <div class='main-cta'>
            <img src={user_gif} alt='' class='bd-box' />
            <p class='cta-text'>
              Listen and rate songs from your Spotify playlists. Our machine
              learning model will predict if you like a song before you hear it!
            </p>
            <div class='cta-signup'>
              <Button
                variant='contained'
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                  margin: 30,
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: 'white',
                  backgroundColor: '#1DB954',
                }}
                href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
                  scopes,
                )}&response_type=token&show_dialog=true`}>
                Login With Spotify
              </Button>
            </div>
          </div>
          <div class='features fullwidth first'>
            <img src={walking_city} alt='' class='bd-box' />
            <div class='text-content'>
              <h2>What makes you move?</h2>
              <p>See what makes the songs you love awesome.</p>
            </div>
          </div>
          <div class='features second'>
            <img src={weather_sitting} alt='' class='baloon-woman' />
            <div class='text-content'>
              <h2>Prediction at it's finest.</h2>
              <p>
                The more songs you rate the more accurate your predictions will
                be.
              </p>
            </div>
          </div>
          <div class='features fullwidth third'>
            <img src={music_notes} alt='' class='party' />
            <div class='text-content'>
              <h2>Are you smarter than a machine?</h2>
              <p>
                Put us to the test! See if we can predict if you like a song
                before you hear it.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
