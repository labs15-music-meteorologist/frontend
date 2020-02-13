import React from "react";
import styled from "styled-components";
import Button from "./dashboard/element-styles/AuthButton.js";
import "../views/styles/about.css";

import AboutImage from "../assets/About-Image.svg";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "256aebf9b04a4f5480a757f770864028"; // testing ENV

const redirectUri = process.env.REACT_APP_REDIRECT_URL;

const scopes = [
  "streaming",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-library-read",
  "user-library-modify",
  "user-modify-playback-state",
  "user-read-email",
  "user-read-private",
  "playlist-modify-public",
  "playlist-modify-private"
];

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 3136px;
`;

const Header = styled.h2`
  font-size: 48px;
  width: 900px;
  margin: 5%;
  text-align: center;
`;

const SecondaryHeader = styled.h4`
  font-size: 24px;
`;

const Sentence = styled.p`
  font-size: 20px;
  color: white;
  opacity: 0.75;
`;

const Grid = styled.div`
  display: grid;
  margin-left: 25%;
  margin-right: 25%;
  height: 1500px;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30% 30% 30%;
`;

const InnerGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 7%;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #151619;
  height: 66px;
  width: 100%;
  font-size: 18px;
  position: relative;
  bottom: 0;
  margin-top: 10%;
`;

const About = () => (
  <AboutContainer>
    <div className='nav'>just chillin, waitin for a nav bar</div>
    <div className='about-image'>
      <img src={AboutImage} />
    </div>
    <div className='header-container'>
      <Header>Sit back while we create a playlist of songs you'll love.</Header>
    </div>
    <Grid>
      <InnerGrid>
        <SecondaryHeader>
          Songs picked just for your music taste.
        </SecondaryHeader>
        <Sentence>
          We’ll put together a playlsit for you based on the musical traits of
          the songs you like.
        </Sentence>
      </InnerGrid>
      <InnerGrid>
        <img></img>
      </InnerGrid>
      <InnerGrid>
        <img></img>
      </InnerGrid>
      <InnerGrid>
        <SecondaryHeader>
          Our prediction model will do all the work.
        </SecondaryHeader>
        <Sentence>
          We’ve got you covered, just join with your Spotify account and we’ll
          take it from there.
        </Sentence>
      </InnerGrid>
      <InnerGrid>
        <SecondaryHeader>Listen and enjoy!</SecondaryHeader>
        <Sentence>
          Voila! Now you can add the playlist to your Spotify or enjoy in our
          music player.
        </Sentence>
      </InnerGrid>
      <InnerGrid>
        <img></img>
      </InnerGrid>
    </Grid>
    <div className='button-container'>
      <Button
        as='a'
        href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
          scopes
        )}&response_type=token&show_dialog=true`}
      >
        Get Started!
      </Button>
    </div>
    <Footer>
      <p> © Copyright 2019, SoundDrip </p>
    </Footer>
  </AboutContainer>
);

export default About;
