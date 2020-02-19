import React from 'react';
import styled from 'styled-components';
import '../App.css';
import MusicLogo from '../assets/sounddrip.svg';

const HomepageNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  text-decoration: none;
  margin-left: 5%;
  padding-top: 2%;
  height: 60px;
  width: 450px;
  color: #9DA4AF;
  font-size: 19px;
  position: absolute;

  @media (max-width: 576px) {
    display: none;
  }
`;

const NavbarLinks = styled.a`
    text-decoration: none;
    color: #9DA4AF;
    font-size: 18px;

    &:hover {
        color: white;
      }
`;

const HomepageNav = () => {

  return (
    <HomepageNavbar>
        <a href="/"><img src={MusicLogo}/></a>
        <NavbarLinks href="/about">How it works?</NavbarLinks>
        <NavbarLinks href="/team">Team</NavbarLinks>
        <NavbarLinks href="https://github.com/Lambda-School-Labs/Music-Meteorologist-fe" target="_blank">Github</NavbarLinks>
    </HomepageNavbar>
  );

}

export default HomepageNav