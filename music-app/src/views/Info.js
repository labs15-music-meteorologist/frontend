import React from 'react';

import { Grid } from '@material-ui/core';

import CryingCloud from '../assets/crying-cloud.png';
import './styles/info.css';

export class Info extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='info-container'>
          <Grid
            className='dashboard-grid'
            container
            direction='row'
            justify='center'
            alignItems='center'>
            <Grid item>
              <div className='header-text' style={{ fontSize: '5rem' }}>
                We are so sorry,
              </div>
            </Grid>
            <Grid item>
              <img
                className='crying-cloud'
                src={CryingCloud}
                style={{ width: '73%', margin: 20, transform: 'rotate(20deg)' }}
              />
            </Grid>
          </Grid>
        </div>
        <div className='text-container'>
          <h1 className='text' style={{ color: 'white' }}>
            we are working closely together with Spotify to make our educated
            guesses better. Since music is usually licensed we can only offer
            our service to Spotify Premium users. Currently we are working hard
            on enabling iOS devices.
          </h1>
        </div>
      </div>
    );
  }
}

export default Info;
