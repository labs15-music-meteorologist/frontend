import React from 'react';
import '../../../views/styles/navbar.css';
import MusicLogo from '../../../assets/sounddrip.svg';
import styled from 'styled-components';
import MenuListComposition from './Dropdown'

const Nav1 = styled.div`
  background: #0E0F11;
  width: 100vw;
  height: 84px;
`;

const Logo1 = styled.img`

  height: 50px;
  margin-left: 105px;
  margin-top: 20px;
`;

const Navname = styled.p`
margin-right: 50px;
margin-top: 31px;
font-family: Work Sans;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 21px;
display: flex;
align-items: center;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Relog = styled.button`
  background-color: #E20351;
  padding: 3px;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`

const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "256aebf9b04a4f5480a757f770864028";
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

class NavBar extends React.Component {

  


  homeButton = e => {
    e.preventDefault();
    window.location.href = '/';
  };
  render() {
    return (
      <Nav1>
        <NavContainer>
          {console.log("props from navbar", this.props)}
          <Logo1
            src={MusicLogo}
            alt={'Navbar logo'}
            onClick={e => {
              this.homeButton(e);
            }}></Logo1>
          <Navname>{this.props.userName ? this.props.userName :
            <Relog as='a' href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scopes)}&response_type=token&show_dialog=true`}>Login</Relog>}
            <MenuListComposition navBarProps={this.props.musicPlayerProps} userName={this.props.userName} deviceId={this.props.deviceId}/>
          </Navname>
        </NavContainer>
      </Nav1>
    );
  }
}

export default NavBar;
