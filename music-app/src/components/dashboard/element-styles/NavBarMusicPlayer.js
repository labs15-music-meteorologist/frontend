import React from 'react';
import '../../../views/styles/navbar.css';
import MusicLogo from '../../../assets/sounddrip1.svg';
import styled from 'styled-components';

const Nav1 = styled.div`
  background: #0E0F11;
  width: 100vw;
  height: 84px;
`;

const Logo1 = styled.img`
  width: 118px;
  height: 26px;
  margin-left: 75px;
  margin-top: 29px;
`;

const Navname = styled.p`
margin-right: 75px;
margin-top: 33px;
font-family: Work Sans;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 21px;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class NavBar extends React.Component {
  homeButton = e => {
    e.preventDefault();
    window.location.href = '/';
  };

  render() {
    return (
      <Nav1>
        <NavContainer>
          <Logo1
            src={MusicLogo}
            alt={'Navbar logo'}
            onClick={e => {
              this.homeButton(e);
            }}></Logo1>
          <Navname>PlaceHolder Name ▼</Navname>
        </NavContainer>
      </Nav1>
    );
  }
}

export default NavBar;
