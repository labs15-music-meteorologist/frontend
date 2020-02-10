import React from 'react';
import styled from 'styled-components';

import AboutImage from '../assets/About-Image.svg'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const About = () => (

    <AboutContainer>
      <h1>About</h1>
      <p>
        Music Meteorologist aims to be the audiophpile's guilty pleasure, a
        project rooted out of Lambda School's Labs that works off of a user's
        Spotify account (currently Premium users only) that allows the user to
        really shape what their player reccomends
      </p>
    </AboutContainer>

);

export default About;
