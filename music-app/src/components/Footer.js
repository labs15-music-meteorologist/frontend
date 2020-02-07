import React from 'react';
import styled from 'styled-components';
import '../App.css';

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #151619;
  height: 66px;
  font-size: 18px;
`;

const FooterContainer = () => {

  return (
    <Footer>
        <p> © Copyright 2019, Music Meteorologist </p>
    </Footer>
  );

}

export default FooterContainer