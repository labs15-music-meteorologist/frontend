import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Paper, Grid, Typography } from '@material-ui/core';
import '../App.css';
import HeaderImage from '../images/header.jpg';

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
    let _token = hash.access_token;
    console.log('TOKEN', _token);
    console.log('HASH TOKEN', hash.access_token);
    console.log('PROPS', this.props);
    if (_token) {
      localStorage.setItem('token', _token);
      // window.location.href = '/dashboard';
      this.props.history.push('/dashboard');
    }
  }
  render() {
    return (
      <div className='auth'>
        <img src={HeaderImage} style={{ width: '63%', margin: 20 }} />
        <Paper
          style={{
            // backgroundColor: `rgba(${20}, ${20}, ${20}, ${0.85})`
            backgroundColor: `rgba(${20}, ${20}, ${20}, ${0.0})`,
          }}>
          <Grid
            container
            direction='column'
            justify='space-between'
            alignItems='center'>
            <Typography
              variant='h4'
              style={{ color: 'white', margin: 10, fontWeight: 'bold' }}>
              Create your own Spotify Playlists
            </Typography>
            <Typography
              variant='h6'
              style={{
                color: 'white',
              }}>
              Based on your mood, musical preferences, or if you just want to
              hear new music
            </Typography>
            <Typography variant='h7' style={{ color: 'white', margin: 10 }}>
              Please Login below to continue...
            </Typography>
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
                backgroundColor: `rgba(${255}, ${189}, ${89}, ${0.75})`,
              }}
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
                scopes,
              )}&response_type=token&show_dialog=true`}>
              Login
            </Button>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default Auth;
