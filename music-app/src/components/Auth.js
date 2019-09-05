import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import { Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import '../App.css';
import '../views/styles/homepage.css';

import walking_city from '../assets/walking_city.svg';
import weather_sitting from '../assets/weather_sitting.svg';
import music_notes from '../assets/music_notes.svg';

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

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  grid: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
    backgroundColor: 'gray',
    marginBottom: '200px',
  },
  table: {
    minWidth: 650,
  },
}));

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
            <h1>Ever wonder why you love the songs you do?</h1>
            <p class='cta-text'>
              Check out song characteristics from your spotify account. Our
              machine learning algorithm will predict if you like it.
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
              <h2>See song characteristics.</h2>
              <p>See all the good bits that make up the songs you love.</p>
            </div>
          </div>
          <div class='features second'>
            <img src={weather_sitting} alt='' class='baloon-woman' />
            <div class='text-content'>
              <h2>Some cool text here.</h2>
              <p>Music is rad find out why.</p>
            </div>
          </div>
          <div class='features fullwidth third'>
            <img src={music_notes} alt='' class='party' />
            <div class='text-content'>
              <h2>Are you smarter than a machine?</h2>
              <p>More cool text here. Bada Bing.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
