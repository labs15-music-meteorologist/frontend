import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import MusicLogo from '../../../assets/sounddrip.svg';
import "../../../views/styles/mobileNav.css";

const StyledMenu = styled.nav`
display: none;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(14, 15, 17, 0.97);
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
      width: 100%;
      padding: 0%;
      z-index: 2;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #FFFFFF;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

  }
`

const StyledBurger = styled.button`

display: none;
right: 2rem;
@media (max-width: 576px) {

  position: absolute;
  top: 30%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#FFFFFF' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
}
`


const Menu = ({ open }) => {
    return (
      <StyledMenu open={open}>
        <a href="/about">
          How it works?
        </a>
        <a href="/team">
          Team
          </a>
        <a href="https://github.com/Lambda-School-Labs/Music-Meteorologist-fe" target="_blank">
          Github
          </a>
      </StyledMenu>
    )
  }

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}


function MobileNav() {
    const [open, setOpen] = useState(false);
    const node = useRef();

  return (
    <div ref={node}>
        <div className="logo"><a href="/"><img src={MusicLogo}/></a></div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
    </div>
  );

}

export default MobileNav
