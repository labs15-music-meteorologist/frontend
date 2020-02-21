import React, { Component } from "react";

import ButtonAuth from "./dashboard/element-styles/AuthButton.js";
import MobileNav from "./dashboard/element-styles/MobileNav.js";

import Footer from "./Footer.js";
import HomepageNav from "./HomepageNav.js"
import "../App.css";
import "../views/styles/homepage.css";

import albums_background from "../assets/albums-background.svg";
import albums_background_mobile from "../assets/albums-background-mobile.svg";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "256aebf9b04a4f5480a757f770864028"; // testing ENV
// const redirectUri = process.env.REACT_APP_REDIRECT_URL;

const redirectUri = process.env.REACT_APP_REDIRECT_URL;

// const redirectUri = process.env.REACT_APP_REDIRECT_URL // has to match exactly with spotify dashboard redirect uri
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

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

window.location.hash = "";

export class Auth extends Component {
  componentDidMount() {
    let token = hash.access_token;
    if (token) {
      localStorage.setItem("token", token);
      this.props.history.push("/dashboard");
    }
  }

  render() {

    return (
      <div className='auth'>
        <MobileNav/>
        <HomepageNav/>
        <div class='main-wrapper'>
          <div className='main-cta-spotify'>
            <div class='img-container'>
              <img src={albums_background} alt='' class='bd-box' />
            </div>
            <div class='text-content-container'>
              <div class='text-content'>
                <h2>Discover songs by their traits</h2>
                <p>
                  We'll curate a playlist based on the different traits of songs
                  you like in your Spotify library.
                </p>
                <div class='cta-signup'>
                  <ButtonAuth
                    as='a'
                    href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
                      scopes
                    )}&response_type=token&show_dialog=true`}
                  >
                    Login With Spotify
                  </ButtonAuth>
                  <div class='img-container-mobile'>
                    <img src={albums_background_mobile} alt='' class='bd-box' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Auth;
