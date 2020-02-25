import React from 'react';
import styled from 'styled-components';
import '../App.css';
import Loader from '../assets/loader.gif';

const LoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 600px;
  width: 600px;
  padding-top: 14%;
  margin: 0%;
  @media (max-width: 576px) {
    padding-top: 45%;
    margin: 2%;
  }
`;

const LoaderContainer = () => {

  return (
    <div>
      <LoadContainer>
        {/* chill, its coming */}
        <img src={Loader} />
      </LoadContainer>
    </div>
  );

}

export default LoaderContainer