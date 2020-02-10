import React from 'react';
import styled from 'styled-components';
import Footer from './Footer.js'
import '../views/styles/about.css';

import AboutImage from '../assets/About-Image.svg'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 3136px;
`;

const Header = styled.h2`
  font-size: 48px;
  width: 900px;
  margin: 5%;
`;

const SecondaryHeader = styled.h4`
font-size: 24px;
`

const Sentence = styled.p`
font-size: 20px;
color: white;
opacity: 0.75;
`

const Grid = styled.div`
  display: grid;
  margin-left: 25%;
  margin-right: 25%;
  height: 1200px;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30% 30% 30%;
  border: 1px solid white;
`

const InnerGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 7%;
`
const About = () => (

    <AboutContainer>
      <div className="about-image">
        <img src={AboutImage}/>
      </div>
      <div className="header-container">
        <Header>Sit back while we create a playlist of songs you'll love.</Header>
      </div>
      <Grid>
        <InnerGrid>
            <SecondaryHeader>Songs picked just for your music taste.</SecondaryHeader>
            <Sentence>We’ll put together a playlsit for you based on the musical traits of the songs you like.</Sentence>
        </InnerGrid>
        <InnerGrid>
          <img></img>
        </InnerGrid>
        <InnerGrid>
          <img></img>
        </InnerGrid>
        <InnerGrid>
          <SecondaryHeader>Our prediction model will do all the work.</SecondaryHeader>
          <Sentence>We’ve got you covered, just join with your Spotify account and we’ll take it from there.</Sentence>
        </InnerGrid>
        <InnerGrid>
            <SecondaryHeader>Listen and enjoy!</SecondaryHeader>
            <Sentence>Voila! Now you can add the playlist to your Spotify or enjoy in our music player.</Sentence>
        </InnerGrid>
        <InnerGrid>
          <img></img>
        </InnerGrid>
      </Grid>
    </AboutContainer>

);

export default About;
